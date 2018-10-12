import { orderBy } from 'lodash';

const territoriesJSON = require('cldr-localenames-modern/main/en-GB/territories.json');
const territoriesJSONcy = require('cldr-localenames-modern/main/cy/territories.json');

const territories = territoriesJSON.main['en-GB'].localeDisplayNames.territories;
const territoriesCY = territoriesJSONcy.main['cy'].localeDisplayNames.territories;

let options = [];

for (const key in territories) {
  if (territories.hasOwnProperty(key) && isNaN(parseInt(key))) {
    const option = {
      option_text: territories[key],
      option_value: key,
      option_alternatives: [territoriesCY[key]]
    }

    if (key === 'GB') {
      option.option_alternatives = [
        ...option.option_alternatives,
        'Wales',
        'Cymru',
        'England',
        'Lloeger',
        'Scotland',
        'Yr Alban',
        'Northern Ireland',
        'Gogledd Iwerddon'
      ]
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
options.splice(1, 0, options.splice(gbIndex, 1)[0])

module.exports = {
  title: 'Typeahead',
  status: 'wip',
  collated: false,
  variants: [{
    name: 'typeahead',
    label: 'Typeahead',
    context: {
      label: 'Typeahead',
      label_text: 'Select a country',
      label_class: 'js-typeahead-label',
      label_for: 'typeahead',
      listbox_id: 'typeahead-listbox',
      options: options
    }
  }]
}
