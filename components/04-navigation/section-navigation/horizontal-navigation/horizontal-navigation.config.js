module.exports = {
  "title": "Horiztonal navigation",
  "default": "horizontal",
  "status": "wip",
  "collated": false,
  "variants": [{
    "label":"horizontal navigation",
    "name":"horizontal",
    "context": {
        "label":"Nav Section (horizontal)",
        "nav-wrapper-classes":"nav nav--inline nav--page nav--dark",
        "nav-inner-classes": "nav__list",
        "nav-items": [
          {
            "item": "Section 1",
            "item_url": "#item1",
            "item_class": "nav__item--current",
            "current": true
          },
          {
            "item": "Section 2",
            "item_url": "#item2",
          },
          {
            "item": "Section 3",
            "item_url": "#item3"
          }
        ]
      }
    }
  ]
}
