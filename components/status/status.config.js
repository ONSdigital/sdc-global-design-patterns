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
    'name': 'success-small',
    'label': 'Success (small)',
    'context': {
      'label': 'Success',
      'variant': 'success status--small'
    },
  },{
    'name': 'warning',
    'label': 'Warning',
    'context': {
      'label': 'Warning',
      'variant': 'warning'
    },
  },{
    'name': 'warning-small',
    'label': 'Warning (small)',
    'context': {
      'label': 'Warning',
      'variant': 'warning status--small'
    },
  },{
    'name': 'dead',
    'label': 'Dead',
    'context': {
      'label': 'Dead (don’t use)',
      'variant': 'dead'
    },
  },{
    'name': 'dead-small',
    'label': 'Dead (small)',
    'context': {
      'label': 'On hold',
      'variant': 'dead status--small'
    },
  },{
    'name': 'info',
    'label': 'Other / Neutral',
    'context': {
      'label': 'Other',
      'variant': 'info'
    },
  },{
    'name': 'info-small',
    'label': 'Other / Neutral',
    'context': {
      'label': 'Other (small)',
      'variant': 'info status--small'
    },
  },{
    'name': 'error',
    'label': 'Error',
    'context': {
      'label': 'Error',
      'variant': 'error'
    },
  },{
    'name': 'error-small',
    'label': 'Error (small)',
    'context': {
      'label': 'Error (small)',
      'variant': 'error status--small'
    },
  }]
}
