module.exports = {
  'title': 'Mutually exclusive question pattern',
  'label': 'Mutually exclusive',
  'name': 'mutually exclusive',
  'status': 'ready',
  'context': {
    'fieldset_legend': 'What type of central heating do you have?',
    'field_label': 'Select all that apply:',
    'or': 'Or',
    'options': [
      {'option_text': 'Gas', 'option_value': 'gas', 'label_for': 'gas', 'label_text': 'Gas', 'label_inline': true},
      {'option_text': 'Electric', 'option_value': 'electric', 'label_for': 'electric', 'label_text': 'Electric', 'label_inline': true},
      {'option_text': 'Solid fuel', 'option_value': 'solid-fuel', 'label_for': 'solid-fuel', 'label_text': 'Solid fuel', 'label_inline': true},
      {'option_text': 'Other', 'option_value': 'other', 'label_for': 'other', 'label_text': 'Other', 'label_inline': true}
    ],
    'or_option_text':'No central heating',
    'or_option_value':'no central heating',
    'or_deselect_adjective': 'deselected',
    'or_deselect_message': 'Selecting this will uncheck all other checkboxes'
  }
};
