module.exports = {
  'title': 'Status',
  'default': 'success',
  'collated': true,
  'status': 'wip',
  'variants': [{
    'name': 'success',
    'label': 'Success',
    'context': {
      'label': 'Ready',
      'variant': 'success'
    },
  },{
    'name': 'warning',
    'label': 'Warning',
    'context': {
      'label': 'Warning',
      'variant': 'warning'
    },
  },{
    'name': 'dead',
    'label': 'Dead',
    'context': {
      'label': 'Dead (don’t use)',
      'variant': 'dead'
    },
  },{
    'name': 'info',
    'label': 'Other / Neutral',
    'context': {
      'label': 'Other',
      'variant': 'info'
    },
  },{
    'name': 'error',
    'label': 'Error',
    'context': {
      'label': 'Error',
      'variant': 'error'
    },
  }]
}
