module.exports = {
  title: "Language",
  label: "Language selection",
  collated: true,
  status: "wip",
  default: "toggle-en",
  preview: "@preview__page",
  variants: [{
    'name': 'toggle-en',
    'label': 'Toggle',
    'context': {
      'lang_link': '#eng',
      'lang_link_text': 'English',
    },
  },{
    'name': 'toggle-cy',
    'label': 'CY: Toggle',
    'context': {
      'lang_link': '#cym',
      'lang_link_text': 'Cymraeg',
    }
  }]
}
