module.exports = {
  "title": "Header",
  "status": "ready",
  "default": "standard",
  "collated": true,
  "preview": "@preview__page", /* As it is a layout level element use page preview */
  "variants": [{
    "name": "standard",
    "label": "Header - standard external",
    "context": {
      "title": "Standard title header",
    },
  },{
    "name": "standard-cy",
    "label": "Header - standard external (Welsh)",
    "context": {
      "title": "Gwasanaeth Cymraeg",
      "cy": true
    },
  },{
    "name": "standard-internal",
    "label": "Header - standard internal",
    "context": {
      "title": "Internal title header",
      "classes": "header--internal",
      "internal": true
    },
  },{
    "name": "hero",
    "label": "Header - hero",
    "context": {
      "title": "Hero title header",
      "classes": "header--hero",
      "description": "This is the description or tagline",
    },
  },{
    "name": "hero-cy",
    "label": "Header - hero (Welsh)",
    "context": {
      "title": "Pennyn Arwr",
      "classes": "header--hero",
      "description": "Dyma’r disgrifiad o’r wasanaeth",
      "cy": true
    },
  },{
    "name": "thin-internal",
    "label": "Header - internal thin",
    "context": {
      "title": "Thin title header",
      "classes": "header--thin header--internal",
      "internal": true
    },
  }]
}
