module.exports = {
  "title": "Header",
  "status": "wip",
  "default": "standard",
  "collated": true,
  "preview": "@preview__page", /* As it is a layout level element use page preview */
  "variants": [{
    "name": "standard",
    "label": "Header - standard",
    "context": {
      "title": "Standard title header",
      "nav-wrapper-classes":"nav nav--horizontal nav--sub nav--dark",
      "nav-inner-classes": "nav__list",
      "nav-items": [
        {
          "item": "Section 1",
          "item_url": "#item1",
          "item_class": "nav__item--current"
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
    },
  // },{
  //   "name": "hero",
  //   "label": "Header - hero",
  //   "context": {
  //     "title": "Hero title header",
  //     "classes": "header--hero",
  //     "description": "This is the description or tagline"
  //   },
  // },{
  //   "name": "thin",
  //   "label": "Header - thin",
  //   "context": {
  //     "title": "Thin title header",
  //     "classes": "header--thin",
  //   },
  }]
}