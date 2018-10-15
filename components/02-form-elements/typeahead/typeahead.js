const UUID = require('uuid/v4');
import domready from '../../../assets/js/domready';
import triggerChangeEvent from '../../../assets/js/trigger-change-event';

export const classTypeahead = 'js-typeahead';
export const classTypeaheadLabel = 'js-typeahead-label';
export const classTypeaheadSelect = 'js-typeahead-select';
export const classTypeaheadCombobox = 'js-typeahead-combobox';
export const classTypeaheadInput = 'js-typeahead-input';
export const classTypeaheadPreview = 'js-typeahead-preview';
export const classTypeaheadListbox = 'js-typeahead-listbox';
export const classTypeaheadOption = 'typeahead__option';
export const classTypeaheadOptionFocused = `${classTypeaheadOption}--focused`;
export const classTypeaheadOptionNoResults = `${classTypeaheadOption}--no-results`;
export const classTypeaheadAriaStatus = 'js-typeahead-aria-status';
export const classTypeaheadInputFocused = 'input--focused';
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
    this.combobox = context.querySelector(`.${classTypeaheadCombobox}`);
    this.input = context.querySelector(`.${classTypeaheadInput}`);
    this.preview = context.querySelector(`.${classTypeaheadPreview}`);
    this.listbox = context.querySelector(`.${classTypeaheadListbox}`);
    this.ariaStatus = context.querySelector(`.${classTypeaheadAriaStatus}`);

    // State
    this.content = JSON.parse(context.getAttribute('data-content'));
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
    this.blurTimeout = null;

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
    clearTimeout(this.blurTimeout);
    this.input.classList.add(classTypeaheadInputFocused);
    this.input.setAttribute('autocomplete', false);
    this.getSuggestions();
  }

  handleBlur() {
    clearTimeout(this.blurTimeout);
    this.blurring = true;

    this.blurTimeout = setTimeout(() => {
      this.clearPreview();
      this.clearListbox();
      this.input.classList.remove(classTypeaheadInputFocused);
      this.input.setAttribute('autocomplete', this.inputInitialAutocompleteSetting);
      this.blurring = false;
    }, 100);
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
        this.sanitisedQuery = query.toLowerCase().trim();

        this.unsetResults();
        this.setAriaStatus();

        if (query.length >= typeaheadMinChars) {
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
      } else {
        this.setAriaStatus();
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
    console.log('clear')
    this.listbox.innerHTML = '';
    this.input.removeAttribute('aria-activedescendant');
    this.combobox.removeAttribute('aria-expanded');

    this.setAriaStatus();
  }

  handleResults(results) {
    if (!this.deleting || (results.length && this.deleting)) {
      if (results.length === 1 && results[0].sanitisedText === this.sanitisedQuery) {
        this.selectResult(0);
      } else {
        this.resultOptions = results.map((result, index) => {
          let innerHTML = result.text;
          let ariaLabel = `${result.text}.`;

          const alternativeMatch = result.sanitisedAlternatives.find(alternative => alternative !== result.sanitisedText && alternative.includes(this.sanitisedQuery));

          if (alternativeMatch) {
            const alternativeText = result.alternatives[result.sanitisedAlternatives.indexOf(alternativeMatch)];
            innerHTML += ` <small>(${alternativeText})</small>`;
            ariaLabel += ` (${alternativeText}).`;
          }

          ariaLabel += ` (${index + 1} ${this.content.x_of_x} ${results.length})`;

          const listElement = document.createElement('li');
          listElement.className = classTypeaheadOption;
          listElement.setAttribute('id', `${this.listboxId}__option--${index}`);
          listElement.setAttribute('role', 'option');
          listElement.setAttribute('tabindex', '-1');
          listElement.setAttribute('aria-label', ariaLabel);
          listElement.innerHTML = innerHTML;

          listElement.addEventListener('click', () => {
            console.log('click');
            this.selectResult(index);
          });

          this.listbox.appendChild(listElement);

          return listElement;
        });

        this.setHighlightedResult(null);
        this.combobox.setAttribute('aria-expanded', true);
      }
    }

    if (results.length === 0) {
      this.listbox.innerHTML = `<li class="${classTypeaheadOption} ${classTypeaheadOptionNoResults}">${this.content.no_results}</li>`;
      this.combobox.setAttribute('aria-expanded', true);
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

  setAriaStatus(content) {
    if (!content) {
      const numberOfResults = this.results.length;
      const queryTooShort = this.sanitisedQuery.length < typeaheadMinChars;
      const noResults = numberOfResults === 0;

      if (queryTooShort) {
        content = this.content.aria_min_chars;
      } else if (noResults) {
        content = `${this.content.aria_no_results}: "${this.query}"`;
      } else if (numberOfResults === 1) {
        content = this.content.aria_one_result;
      } else {
        content = this.content.aria_n_results.replace('{n}', numberOfResults);
      }
    }

    this.ariaStatus.innerHTML = content;
  }

  clearPreview() {
    this.preview.value = '';
  }

  selectResult(index) {
    if (this.results.length) {
      this.settingResult = true;

      const result = this.results[index || this.highlightedResultIndex || 0];

      this.input.value = result.text;
      this.query = result.text;
      this.select.value = result.value;
      triggerChangeEvent(this.select);

      let ariaAlternativeMessage = '';

      if (!result.sanitisedText.includes(this.sanitisedQuery)) {
        const alternativeMatch = result.sanitisedAlternatives.find(alternative => alternative.includes(this.sanitisedQuery));

        if (alternativeMatch) {
          ariaAlternativeMessage = `, ${this.content.aria_found_by_alternative_name}: ${alternativeMatch}`
        }
      }

      const ariaMessage = `${this.content.aria_you_have_selected}: ${result.text}${ariaAlternativeMessage}.`;

      this.setAriaStatus(ariaMessage);

      this.clearListbox();
      this.clearPreview();

      console.log(result.text);

      setTimeout(() => {
        this.settingResult = false;
        this.input.setAttribute('autocomplete', 'false');
      }, 300);
    }
  }
}

export default function typeahead() {
  const typeaheads = [].slice.call(document.getElementsByClassName(classTypeahead));

  typeaheads.forEach(typeahead => new Typeahead(typeahead));
}

domready(typeahead);
