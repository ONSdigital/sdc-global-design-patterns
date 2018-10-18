module.exports = {
  title: 'Address',
  status: 'prototype',
  context: {
    typeahead: {
      listbox_id: 'address-listbox',
      instructions_id: 'address-typeahead-instructions',
      instructions: 'Use up and down keys to navigate country results once you\'ve typed more than two characters. Use the enter key to select a result.',
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
}
