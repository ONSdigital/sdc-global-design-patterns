module.exports = {
  title: 'Language',
  label: 'Language selection',
  collated: true,
  status: 'wip',
  default: 'toggle-en',
  preview: '@preview__page',
  variants: [
    {
      'name': 'toggle-en',
      'label': 'Toggle',
      'context': {
        'chooseLanguage': 'Choose language',
        'currentLanguage': 'English',
        'currentLanguageCode': 'en',
        'buttonAriaLabel': 'Language selector. Current language: English',
        'items': [
          {
            'text': 'Cymraeg',
            'lang': 'cy',
          },
          {
            'text': 'Polskie',
            'lang': 'pl',
          },
          {
            'text': 'All languages',
            'lang': 'en',
          },
        ],
      },
    },
    {
      'name': 'toggle-cy',
      'label': 'Toggle CY',
      'context': {
        'chooseLanguage': 'Dewiswch iaith',
        'currentLanguage': 'Cymraeg',
        'currentLanguageCode': 'cy',
        'buttonAriaLabel': 'Language selector. Current language: Cymraeg',
        'items': [
          {
            'text': 'English',
            'lang': 'en',
          },
          {
            'text': 'Polskie',
            'lang': 'pl',
          },
          {
            'text': 'Pob iaith',
            'lang': 'cy',
          },
        ],
      },
    },
    {
      'name': 'toggle-pl',
      'label': 'Toggle PL',
      'context': {
        'chooseLanguage': 'Wybierz język',
        'currentLanguage': 'Polskie',
        'currentLanguageCode': 'pl',
        'buttonAriaLabel': 'Wybór języka. Aktualny język: Polski',
        'items': [
          {
            'text': 'English',
            'lang': 'en',
          },
          {
            'text': 'Cymraeg',
            'lang': 'cy',
          },
          {
            'text': 'Wszystkie języki',
            'lang': 'pl',
          },
        ],
      },
    },
  ],
}
