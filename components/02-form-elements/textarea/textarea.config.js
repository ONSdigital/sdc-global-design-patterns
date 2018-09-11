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
    }
  }, {
    'label':'No character limit applied',
    'name':'no-maxchar',
    'context': {
      'textarea_id' : 'textarea-answer-nomax'
    }
  }]
}