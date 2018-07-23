module.exports = {
  'title': 'Currency',
  'default': 'pounds',
  'collated': true,
  'status': 'ready',
  'variants': [{
    'name': 'pounds',
    'context': {
      'label': 'Pounds (GBP)',
      'currency': '£'
    },
  }, {
    'name': 'euros',
    'context': {
      'label': 'Euros (EUR)',
      'currency': '€'
    },
  }, {
    'name': 'dollars-us',
    'context': {
      'label': 'US Dollars (USD)',
      'currency': 'US$'
    },
  }, {
    'name': 'yen-japanese',
    'context': {
      'label': 'Japanese Yen (JPY)',
      'currency': 'JP¥'
    },
  }]
}
