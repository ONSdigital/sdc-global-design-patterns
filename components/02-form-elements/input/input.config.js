module.exports = {
  'title': 'Input',
  'default': 'text',
  'collated': false,
  'status': 'ready',
  'variants': [{
    'name': 'text',
    'label': 'Text',
    'context': {
      'label': 'Textfield',
      'label_text': 'Enter some text',
      'label_for': 'text-input',
      'label_inline': false
    }
  }, {
    'name': 'checkbox',
    'context': {
      'label_text': 'Bacon',
      'label_for': 'checkbox',
      'label_inline': true
    }
  }, {
    'name': 'radio',
    'status': 'ready',
    'context': {
      'label_text': 'Bacon',
      'label_for': 'radio',
      'label_inline': true,
      'legend': 'Select your favourite topping',
      'options': [
        {'option_text': 'Bacon', 'option_value': 'bacon', 'label_for': 'bacon', 'label_text': 'Bacon', 'label_inline': true},
        {'option_text': 'Olives', 'option_value': 'olives', 'label_for': 'olives', 'label_text': 'Olives', 'label_inline': true}
      ]
    }
  }, {
    'name': 'percentage',
    'status': 'ready',
    'context': {
      'label': 'Percentage',
      'label_text': '%'
    }
  }, {
    'name': 'password',
    'status': 'wip',
    'context': {
      'label': 'Password',
      'label_text': 'Enter password'
    }
  }]
};
