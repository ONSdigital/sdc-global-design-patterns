module.exports = {
  title: 'Accordion',
  status: 'ready',
  default: 'accordion',
  preview: '@preview__full-width',
  collated: true,
  'variants': [{
    'label':'Accordion',
    'name':'accordion',
  }, {
    'label':'Accordion controls',
    'name':'accordion-controls',
    'context': {
      'show_all': true
    }
  }, {
    'label':'Accordion contained',
    'name':'accordion-contained',
    'context': {
      'collapsible_class':' collapsible--contained',
      'complex': true
    }
  }]
};
