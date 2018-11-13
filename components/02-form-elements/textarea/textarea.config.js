module.exports = {
  'title': 'Textarea',
  'label': 'Textarea',
  'name': 'textarea',
  'collated': true,
  'default': 'no-maxchar',
  'status': 'ready',
  'variants': [{
    'label':'Maximum character limit (40)',
    'name':'limited',
    'context': {
      'charlimit' : '40',
      'textarea_id': 'textarea-answer-lim',
      'textarea_label': 'label-lim',
    }
  }, {
    'label':'No character limit applied',
    'name':'no-maxchar',
    'context': {
      'textarea_id' : 'textarea-answer-nomax',
      'textarea_label': 'label-nolim',
    }
  }, {
    'label':'CY: Maximum character limit (40)',
    'name':'limited-cy',
    'context': {
      'charlimit' : '40',
      'textarea_id': 'textarea-answer-lim-cy',
      'textarea_label': 'label-lim-cy',
      'cy':true,
    }
  }
]
}
