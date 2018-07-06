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
    },
  },{
    "name": "hero",
    "label": "Header - hero",
    "context": {
      "title": "Hero title header",
      "classes": "header--hero",
      "description": "This is the description or tagline"
    },
  },{
    "name": "thin",
    "label": "Header - thin",
    "context": {
      "title": "Thin title header",
      "classes": "header--thin",
    },
  }]
}