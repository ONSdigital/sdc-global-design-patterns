import domready from '../../../assets/js/domready';
import triggerChangeEvent from '../../../assets/js/trigger-change-event';
import Typeahead from './typeahead-core';
import { sanitiseTypeaheadText } from './typeahead-helpers';

export const classTypeahead = 'js-typeahead';
export const classTypeaheadSelect = 'js-typeahead-select';

class SelectTypeahead {
  constructor(context) {
    // Elements
    this.context = context;
    this.select = context.querySelector(`.${classTypeaheadSelect}`);

    // State
    this.resultLimit = context.hasAttribute('data-result-limit') ? parseInt(context.getAttribute('data-result-limit')) : null;
    this.options = [].slice.call(this.select.getElementsByTagName('OPTION'))
      .map(option => {
        const mappedOption = {
          text: option.innerText,
          value: option.hasAttribute('value') ? option.getAttribute('value') : option.innerText,
          alternatives: (option.getAttribute('data-alternatives') || '').split(',')
        }

        mappedOption.sanitisedText = sanitiseTypeaheadText(mappedOption.text)
        mappedOption.sanitisedAlternatives = mappedOption.alternatives.map(alternative => sanitiseTypeaheadText(alternative));

        return mappedOption;
      })
      .filter(option => option.value);

    // Initialise typeahead
    this.typeahead = new Typeahead({
      context,
      suggestionFunction: this.getSuggestions.bind(this),
      onSelect: this.selectResult.bind(this),
      onUnsetResult: this.unsetResult.bind(this),
      resultLimit: this.resultLimit
    });
  }

  getSuggestions(query) {
    return new Promise(resolve => {
      let results = this.options
      .filter(option => option.sanitisedText.includes(query))
      .sort((a, b) => a.sanitisedText.indexOf(query) > b.sanitisedText.indexOf(query) ? 1 : -1);

      const resultsFromAlternatives = this.options
        .filter(option => !!option.sanitisedAlternatives.find(alternative => alternative.includes(query)))
        .sort((a, b) => {
          const getIndex = (item) => item.sanitisedAlternatives.find(alternative => alternative.includes(query)).indexOf(query);
          getIndex(a) > getIndex(b) ? 1 : -1
        });

      // Combine arrays and remove duplicates
      results = Array.from(new Set([...results, ...resultsFromAlternatives]));

      resolve(results);
    });
  }

  unsetResult() {
    this.select.value = '';
    triggerChangeEvent(this.select);
  }

  selectResult(result) {
    return new Promise(resolve => {
      this.select.value = result.value;
      triggerChangeEvent(this.select);
      resolve();
    });
  }
}

export default function typeahead() {
  const typeaheads = [].slice.call(document.getElementsByClassName(classTypeahead));

  typeaheads.forEach(typeahead => new SelectTypeahead(typeahead));
}

domready(typeahead);
