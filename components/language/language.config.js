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
      'label': 'Toggle English (Ireland)',
      'context': {
        'languages': [
          {
            'url': '#',
            'ISOCode': 'en-GB',
            'text': 'English',
            'buttonAriaLabel': 'Language selector. Current language: English',
            'chooseLanguage': 'Choose language',
            'current': true,
          },
          {
            'url': '#',
            'ISOCode': 'ga',
            'text': 'Gaeilge',
            'buttonAriaLabel': 'Roghnóir teanga. Teanga reatha: Gaeilge',
            'chooseLanguage': 'Roghnaigh teanga',
            'current': false,
          },
          {
            'url': '#',
            'ISOCode': 'sco',
            'text': 'Ulstèr-Scotch',
            'buttonAriaLabel': 'Leid selectgor. Current leid: Ulstèr-Scotch',
            'chooseLanguage': 'Wale leid',
            'current': false,
          },
        ],
      },
    },
    {
      'name': 'toggle-cy',
      'label': 'Toggle Cymraeg',
      'context': {
        'languages': [
          {
            'url': '#',
            'ISOCode': 'en-GB',
            'text': 'English',
            'buttonAriaLabel': 'Language selector. Current language: English',
            'chooseLanguage': 'Choose language',
            'current': false,
          },
          {
            'url': '#',
            'ISOCode': 'cy',
            'text': 'Cymraeg',
            'buttonAriaLabel': 'Dewisydd iaith. Iaith gyfredol: Cymraeg',
            'chooseLanguage': 'Dewiswch iaith',
            'current': true,
          },
        ],
      },
    },
    {
      'name': 'toggle-many',
      'label': 'Toggle Many',
      'context': {
        'currentLanguage': {
          'url': '#',
          'ISOCode': 'en-GB',
          'text': 'English',
          'buttonAriaLabel': 'Language selector. Current language: English',
          'chooseLanguage': 'Choose language',
          'current': true,
        },
        'languages': [
          {
            'url': '#',
            'ISOCode': 'en-GB',
            'text': 'English',
            'buttonAriaLabel': 'Language selector. Current language: English',
            'chooseLanguage': 'Choose language',
            'current': true,
          },
          {
            'url': '#',
            'ISOCode': 'cy',
            'text': 'Cymraeg',
            'buttonAriaLabel': 'Dewisydd iaith. Iaith gyfredol: Cymraeg',
            'chooseLanguage': 'Dewiswch iaith',
            'current': false,
          },
          {
            'url': '#',
            'ISOCode': 'ga',
            'text': 'Gaeilge',
            'buttonAriaLabel': 'Roghnóir teanga. Teanga reatha: Gaeilge',
            'chooseLanguage': 'Roghnaigh teanga',
            'current': false,
          },
          {
            'url': '#',
            'ISOCode': 'sco',
            'text': 'Ulstèr-Scotch',
            'buttonAriaLabel': 'Leid selectgor. Current leid: Ulstèr-Scotch',
            'chooseLanguage': 'Wale leid',
            'current': false,
          },
        ],
      },
    },
  ],
}
