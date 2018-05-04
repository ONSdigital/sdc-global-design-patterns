module.exports = {
  "title": "Button",
  "default": "primary",
  "collated": true,
  "status": "test",
  "variants": [{
    "name": "primary",
    "label": "Primary",
    "context": {
      "btn-classes": "btn--primary",
      "label": "Submit"
    },
  }, {
    "name": "primary-lg",
    "label": "Primary (Large)",
    "context": {
      "btn-classes": "btn--primary btn--lg",
      "label": "Start survey"
    },
  }, {
    "name": "secondary",
    "label": "Secondary - bordered",
    "context": {
      "btn-classes": "btn--secondary btn--border",
      "label": "Add a person"
    },
  }, {
    "name": "neutral",
    "label": "Neutral / Disabled",
    "context": {
      "btn-classes": "btn--neutral",
      "label": "Neutral"
    },
  }, {
    "name": "link",
    "label": "Link",
    "context": {
      "btn-classes": "btn--link",
      "label": "Cancel"
    },
  }
]
}
