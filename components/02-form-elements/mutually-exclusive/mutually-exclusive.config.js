module.exports = {
  'title': 'Mutually exclusive question pattern',
  'default': 'checkboxes',
  'status': 'ready',
  'variants': [{
    'name': 'checkboxes',
    'label': 'Mutually exclusive - checkboxes',
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
  },{
    'name': 'date',
    'label': 'Mutually exclusive - date',
    'context': {
      'title': 'When did you leave your last job?',
      'fieldset_legend': 'When did you leave your last job?',
      'field_label': 'Select a date:',
      'or': 'Or',
      'day_label': 'Day',
      'month_label': 'Month',
      'year_label': 'Year',
      'months': [{
        'label': 'Select month',
        'selected': true,
        'disabled': true,
        'value': ''
      },
      {
        'label': 'January',
        'value': '1'
      },
      {
        'label': 'February',
        'value': '2'
      },
      {
        'label': 'March',
        'value': '3'
      },
      {
        'label': 'April',
        'value': '4'
      },
      {
        'label': 'May',
        'value': '5'
      },
      {
        'label': 'June',
        'value': '6'
      },
      {
        'label': 'July',
        'value': '7'
      }],
      'or_option_text':'I have never had a paid job',
      'or_option_value':'I have never had a paid job',
      'or_deselect_adjective': 'deselected',
      'or_deselect_message': 'Selecting this will remove any pre-selected date'
    }
  }]
};
