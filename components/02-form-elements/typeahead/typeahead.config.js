import { orderBy } from 'lodash';

const territoriesJSON = {
  'en-GB': require('cldr-localenames-modern/main/en-GB/territories.json'),
  cy: require('cldr-localenames-modern/main/cy/territories.json')
}

const gbAlternatives = {
  'en-GB': [
    'Wales',
    'England',
    'Scotland',
    'Northern Ireland'
  ],
  cy: [
    'Cymru',
    'Lloeger',
    'Yr Alban',
    'Gogledd Iwerddon'
  ]
}

function buildCountryOptions(primaryLanguageCode, secondaryLanguageCode) {
  const primaryLanguageTerritories = territoriesJSON[primaryLanguageCode].main[primaryLanguageCode].localeDisplayNames.territories;
  let options = [];

  for (const key in primaryLanguageTerritories) {
    if (primaryLanguageTerritories.hasOwnProperty(key) && isNaN(parseInt(key))) {
      const option = {
        option_text: primaryLanguageTerritories[key],
        option_value: key,
        option_alternatives: []
      }

      if (secondaryLanguageCode) {
        option.option_alternatives = [territoriesJSON[secondaryLanguageCode].main[secondaryLanguageCode].localeDisplayNames.territories[key]];
      }

      if (key === 'GB') {
        option.option_alternatives = [
          ...option.option_alternatives,
          ...gbAlternatives[primaryLanguageCode]
        ];

        if (secondaryLanguageCode) {
          option.option_alternatives = [
            ...option.option_alternatives,
            ...gbAlternatives[secondaryLanguageCode]
          ];
        }
      }

      options.push(option);
    }
  }

  options = orderBy(options, ['option_text'], ['desc']);
  options.push({
    option_text: 'Select an option',
    option_value: '',
    selected: 'selected',
    disabled: 'disabled'
  });

  options = options.reverse();

  const gbIndex = options.findIndex(option => option.option_value === 'GB');
  options.splice(1, 0, options.splice(gbIndex, 1)[0]);

  return options;
}

module.exports = {
  title: 'Typeahead',
  default: 'country-typeahead',
  status: 'wip',
  collated: false,
  variants: [
    {
      name: 'country-typeahead',
      label: 'Country Typeahead',
      context: {
        label: 'Country Typeahead',
        label_text: 'Select a country',
        label_class: 'js-typeahead-label',
        label_for: 'typeahead-country-en-GB',
        instructions_id: 'typeahead-instructions-country-en-GB',
        instructions: 'Use up and down keys to navigate country results once you\'ve typed more than two characters. Use the enter key to select a result.',
        listbox_id: 'typeahead-listbox-country-en-GB',
        options: buildCountryOptions('en-GB'),
        content: {
          x_of_x: 'of',
          no_results: 'No results found',
          aria_no_results: 'No results found for the query',
          aria_you_have_selected: 'You have selected',
          aria_found_by_alternative_name: 'found by alternative name',
          aria_min_chars: 'Type in 2 or more characters for results.',
          aria_one_result: 'There is one result available.',
          aria_n_results: 'There are {n} results available.'
        }
      }
    },
    {
      name: 'country-typeahead-cy',
      label: 'Country Typeahead (Welsh)',
      context: {
        label: 'Country Typeahead (Welsh)',
        label_text: 'Dewisiwch gwald',
        label_class: 'js-typeahead-label',
        label_for: 'typeahead-country-cy',
        instructions_id: 'typeahead-instructions-country-cy',
        instructions: 'Use up and down keys to navigate country results once you\'ve typed more than two characters. Use the enter key to select a result.',
        listbox_id: 'typeahead-listbox-country-cy',
        options: buildCountryOptions('cy', 'en-GB'),
        content: {
          x_of_x: 'of',
          no_results: 'No results found',
          aria_no_results: 'No results found for the query',
          aria_you_have_selected: 'You have selected',
          aria_found_by_alternative_name: 'found by alternative name',
          aria_min_chars: 'Type in 2 or more characters for results.',
          aria_one_result: 'There is one result available.',
          aria_n_results: 'There are {n} results available.'
        }
      }
    }
  ]
}
