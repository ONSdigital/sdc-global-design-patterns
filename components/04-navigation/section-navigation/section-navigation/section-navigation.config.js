module.exports = {
  "title": "Section navigation",
  "default": "section",
  "status": "wip",
  "preview": "@preview__menu",
  "collated": false,
  "variants": [{
    "label":"Section navigation",
    "name":"section",
    "context": {
        "label":"Nav Section (vertical)",
        "nav-title": "Nav Section",
        "nav-wrapper-classes":"nav nav--sections nav--vertical js-nav page__nav",
        "nav-inner-classes": "nav__list js-nav-list",
        "nav-items": [
          {
            "item": "Completed nav item",
            "item_url": "#item1",
            "item_class": "nav__item--completed"
          },
          {
            "item": "Second item in an unordered list",
            "item_url": "#item2",
            "item_class": "nav__item--current"

          },
          {
            "item": "Consectetur adipiscing elit curabitur a elit vehicula, finibus arcu ut",
            "item_url": "#item3"
          },
          {
            "item": "Lorem ipsum dolor sit amet",
            "item_url": "#item4"
          }
        ]
      }
    }
  ]
}
