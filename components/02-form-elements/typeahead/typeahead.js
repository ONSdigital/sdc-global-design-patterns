const UUID = require('uuid/v4');
import domready from '../../../assets/js/domready';
import triggerChangeEvent from '../../../assets/js/trigger-change-event';

export const classTypeahead = 'js-typeahead';
export const classTypeaheadLabel = 'js-typeahead-label';
export const classTypeaheadSelect = 'js-typeahead-select';
export const classTypeaheadInput = 'js-typeahead-input';
export const classTypeaheadPreview = 'js-typeahead-preview';
export const classTypeaheadListbox = 'js-typeahead-listbox';
export const classTypeaheadOption = 'typeahead__option';
export const classTypeaheadOptionFocused = `${classTypeaheadOption}--focused`;
export const classTypeaheadOptionNoResults = `${classTypeaheadOption}--no-results`;
export const classTypeaheadAriaStatus = 'js-typeahead-aria-status';
export const typeaheadMinChars = 2;

const KEYCODE = {
  BACK_SPACE: 8,
  RETURN: 13,
  ENTER: 14,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
}

class Typeahead {
  constructor(context) {
    // Elements
    this.context = context;
    this.label = context.querySelector(`.${classTypeaheadLabel}`);
    this.select = context.querySelector(`.${classTypeaheadSelect}`);
    this.input = context.querySelector(`.${classTypeaheadInput}`);
    this.preview = context.querySelector(`.${classTypeaheadPreview}`);
    this.listbox = context.querySelector(`.${classTypeaheadListbox}`);
    this.ariaStatus = context.querySelector(`.${classTypeaheadAriaStatus}`);

    // State
    this.listboxId = this.listbox.getAttribute('id');
    this.ctrlKey = false;
    this.deleting = false;
    this.inputId = UUID();
    this.inputInitialAutocompleteSetting = this.input.getAttribute('autocomplete') || 'false';
    this.options = [].slice.call(this.select.getElementsByTagName('OPTION'))
      .map(option => {
        const mappedOption = {
          text: option.innerText,
          value: option.getAttribute('value'),
          alternatives: option
            .getAttribute('data-alternatives')
            .split(',')
        }

        mappedOption.sanitisedText = mappedOption.text.toLowerCase();
        mappedOption.sanitisedAlternatives = mappedOption.alternatives.map(alternative => alternative.toLowerCase());

        return mappedOption;
      })
      .filter(option => option.value);
    this.query = '';
    this.sanitisedQuery = '';
    this.previousQuery = '';
    this.results = [];
    this.resultOptions = [];
    this.highlightedResultIndex = 0;
    this.settingResult = false;
    this.blurring = false;
    this.ariaStatusTimeout = null;

    // Modify DOM
    this.context.classList.add('typeahead--initialised');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('id', this.inputId);
    this.label.setAttribute('for', this.inputId);

    this.bindEventListeners();
  }

  bindEventListeners() {
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.input.addEventListener('keyup', this.handleKeyup.bind(this));
    this.input.addEventListener('input', this.handleChange.bind(this));
    this.input.addEventListener('focus', this.handleFocus.bind(this));
    this.input.addEventListener('blur', this.handleBlur.bind(this));

    this.listbox.addEventListener('mouseover', this.handleMouseover.bind(this));
    this.listbox.addEventListener('mouseout', this.handleMouseout.bind(this));

    // this.select.addEventListener('change', () => console.log(this.select.value));
  }

  handleKeydown(event) {
    if ((event.ctrlKey || event.metaKey) && event.keyCode !== KEYCODE.V) {
      this.ctrlKey = true;
    } else {
      this.ctrlKey = false;
    }

    switch (event.keyCode) {
      case KEYCODE.UP: {
        event.preventDefault();
        this.navigateResults(-1);
        break;
      }
      case KEYCODE.DOWN: {
        event.preventDefault();
        this.navigateResults(1);
        break;
      }
      case KEYCODE.ENTER:
      case KEYCODE.RETURN: {
        event.preventDefault();
        break;
      }
    }
  }

  handleKeyup(event) {
    switch (event.keyCode) {
      case KEYCODE.UP:
      case KEYCODE.DOWN: {
        event.preventDefault();
        break;
      }
      case KEYCODE.ENTER:
      case KEYCODE.RETURN: {
        this.selectResult();
        break;
      }
      case KEYCODE.LEFT:
      case KEYCODE.RIGHT: {
        break;
      }
      case KEYCODE.BACK_SPACE:
      case KEYCODE.DELETE: {
        this.deleting = true;
        this.getSuggestions();
        break;
      }
      default: {
        if (!this.ctrlKey) {
          this.getSuggestions();
        }
      }
    }

    this.ctrlKey = false;
  }

  handleChange() {
    setTimeout(() => {
      if (!this.blurring) {
        this.getSuggestions();
      }
    }, 10);
  }

  handleFocus() {
    this.input.setAttribute('autocomplete', false);
    this.getSuggestions();
  }

  handleBlur() {
    this.blurring = true;

    this.clearPreview();

    setTimeout(this.clearListbox.bind(this));

    setTimeout(() => {
      this.input.setAttribute('autocomplete', this.inputInitialAutocompleteSetting);

      if (!this.select.value && this.sanitisedQuery) {
        // TODO: Invalid class
        // this.input.classList.add()
      }

      this.blurring = false;
    }, 300);
  }

  handleMouseover() {
    const focusedItem = this.resultOptions[this.highlightedResultIndex];

    if (focusedItem) {
      focusedItem.classList.remove(classTypeaheadOptionFocused);
    }
  }

  handleMouseout() {
    const focusedItem = this.resultOptions[this.highlightedResultIndex];

    if (focusedItem) {
      focusedItem.classList.add(classTypeaheadOptionFocused);
    }
  }

  navigateResults(direction) {
    let index = 0;

    if (this.highlightedResultIndex !== null) {
      index = this.highlightedResultIndex + direction;
    }

    const numberOfResults = this.results.length - 1;

    if (index <= numberOfResults) {
      if (index < 0) {
        index = null;
      }

      this.setHighlightedResult(index);
    }
  }

  getSuggestions() {
    if (!this.settingResult) {
      const query = this.input.value;

      if (query !== this.query || !this.select.value) {
        this.query = query;
        this.unsetResults();

        this.setAriaStatus();

        if (query.length >= typeaheadMinChars) {
          this.sanitisedQuery = query.toLowerCase().trim();

          const results = this.options
            .filter(option => option.sanitisedText.includes(this.sanitisedQuery))
            .sort((a, b) => a.sanitisedText.indexOf(this.sanitisedQuery) > b.sanitisedText.indexOf(this.sanitisedQuery) ? 1 : -1);

          const resultsFromAlternatives = this.options
            .filter(option => !!option.sanitisedAlternatives.find(alternative => alternative.includes(this.sanitisedQuery)))
            .sort((a, b) => {
              const getIndex = (item) => item.sanitisedAlternatives.find(alternative => alternative.includes(this.sanitisedQuery)).indexOf(this.sanitisedQuery);
              getIndex(a) > getIndex(b) ? 1 : -1
            });

          // Combine arrays and remove duplicates
          this.results = Array.from(new Set([...results, ...resultsFromAlternatives]));

          this.handleResults(this.results);
        } else {
          this.clearListbox();
          this.clearPreview();
        }
      }
    }
  }

  unsetResults() {
    this.results = [];
    this.resultOptions = [];
    this.select.value = '';
    triggerChangeEvent(this.select);

    this.clearListbox();
    this.clearPreview();
  }

  clearListbox() {
    this.listbox.innerHTML = '';
    this.input.removeAttribute('aria-activedescendant');
    this.input.removeAttribute('aria-expanded');
  }

  handleResults(results) {
    if (!this.deleting || (results.length && this.deleting)) {
      if (results.length === 1 && results[0].sanitisedText === this.sanitisedQuery) {
        this.setHighlightedResult(0);
        this.selectResult();
      } else {
        this.resultOptions = results.map((result, index) => {
          let innerHTML = this.emboldenMatch(result.text, this.sanitisedQuery);

          const alternativeMatch = result.sanitisedAlternatives.find(alternative => alternative !== result.sanitisedText && alternative.includes(this.sanitisedQuery));

          if (alternativeMatch) {
            const alternativeText = result.alternatives[result.sanitisedAlternatives.indexOf(alternativeMatch)];
            innerHTML += ` <small>(${this.emboldenMatch(alternativeText, this.sanitisedQuery)})</small>`;
          }

          const listElement = document.createElement('li');
          listElement.className = classTypeaheadOption;
          listElement.setAttribute('id', `${this.listboxId}__option--${index}`);
          listElement.setAttribute('role', 'option');
          listElement.setAttribute('tabindex', '-1');
          listElement.innerHTML = innerHTML;

          listElement.addEventListener('click', () => {
            this.setHighlightedResult(index);
            this.selectResult();
          });

          this.listbox.appendChild(listElement);

          return listElement;
        });

        this.setHighlightedResult(null);
        this.input.setAttribute('aria-expanded', true);
      }
    }

    if (results.length === 0) {
      this.listbox.innerHTML = `<li class="${classTypeaheadOption} ${classTypeaheadOptionNoResults}">No results found</li>`;
      this.input.setAttribute('aria-expanded', true);
    }
  }

  setHighlightedResult(index) {
    this.highlightedResultIndex = index;

    if (this.setHighlightedResult === null) {
      this.input.removeAttribute('aria-activedescendant');
    } else if (this.results.length) {
      this.resultOptions.forEach((option, optionIndex) => {
        if (optionIndex === index) {
          option.classList.add(classTypeaheadOptionFocused);
          option.setAttribute('aria-selected', true);
          this.input.setAttribute('aria-activedescendant', option.getAttribute('id'));
        } else {
          option.classList.remove(classTypeaheadOptionFocused);
          option.removeAttribute('aria-selected');
        }
      });

      this.setPreview(index);
      this.setAriaStatus();
    }
  }

  setPreview(index) {
    const result = this.results[index || 0];
    const queryIndex = result.text.toLowerCase().indexOf(this.sanitisedQuery);

    if (queryIndex === 0 && this.sanitisedQuery.length !== result.text.length) {
      this.preview.value = `${this.query}${result.text.slice(this.query.length)}`;
    } else {
      this.clearPreview();
    }
  }

  setAriaStatus() {
    clearTimeout(this.ariaStatusTimeout);
    const numberOfResults = this.results.length;
    const queryTooShort = this.sanitisedQuery.length < typeaheadMinChars;
    const noResults = numberOfResults === 0;

    let content = '';

    if (queryTooShort) {
      content = `Type in ${typeaheadMinChars} or more for results.`;
    } else if (noResults) {
      content = 'No results.';
    } else {
      const result = numberOfResults === 1 ? 'result' : 'results';
      const is = numberOfResults === 1 ? 'is' : 'are';

      content = `${numberOfResults} ${result} ${is} available.`

      if (this.highlightedResultIndex !== null) {
        const selectedResultText = this.results[this.highlightedResultIndex].text;

        content += ` ${selectedResultText} (${this.highlightedResultIndex + 1} of ${numberOfResults}) is selected.`;
      }
    }

    this.ariaStatus.innerHTML = content;

    // this.ariaStatusTimeout = setTimeout(() => {
    //   this.ariaStatus.innerHTML = '';
    // }, 2000);
  }

  clearPreview() {
    this.preview.value = '';
  }

  selectResult() {
    if (this.results.length) {
      this.settingResult = true;

      const result = this.results[this.highlightedResultIndex || 0];

      this.input.value = result.text;
      this.query = result.text;
      this.select.value = result.value;
      triggerChangeEvent(this.select);

      this.clearListbox();
      this.clearPreview();

      setTimeout(() => {
        this.settingResult = false;
        this.input.setAttribute('autocomplete', 'false');
      }, 300);
    }
  }

  // Potentially move out as utility function
  emboldenMatch(string, query) {
    if (string.toLowerCase().includes(query)) {
      const queryLength = query.length;
      const matchIndex = string.toLowerCase().indexOf(query);
      const matchEnd = matchIndex + queryLength;
      const before = string.substr(0, matchIndex);
      const match = string.substr(matchIndex, queryLength);
      const after = string.substr(matchEnd, string.length - matchEnd);

      return `${before}<strong>${match}</strong>${after}`;
    } else {
      return string;
    }
  }
}

export default function typeahead() {
  const typeaheads = [].slice.call(document.getElementsByClassName(classTypeahead));

  typeaheads.forEach(typeahead => new Typeahead(typeahead));
}

domready(typeahead);
