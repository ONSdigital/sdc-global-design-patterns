module.exports = {
  'title': 'Currency',
  'default': 'pounds',
  'collated': true,
  'status': 'ready',
  'variants': [{
    'name': 'pounds',
    'context': {
      'title': 'Pounds (GBP)',
      'label_text': 'Please enter your earnings',
      'label_for': 'gbp',
      'currency': '£'
    },
  }, {
    'name': 'euros',
    'context': {
      'title': 'Euros (EUR)',
      'label_text': 'Please enter your earnings',
      'label_for': 'eur',
      'currency': '€'
    },
  }, {
    'name': 'dollars-us',
    'context': {
      'title': 'US Dollars (USD)',
      'label_text': 'Please enter your earnings',
      'label_for': 'usd',
      'currency': 'US$'
    },
  }, {
    'name': 'yen-japanese',
    'context': {
      'title': 'Japanese Yen (JPY)',
      'label_text': 'Please enter your earnings',
      'label_for': 'jpy',
      'currency': 'JP¥'
    },
  }]
}
