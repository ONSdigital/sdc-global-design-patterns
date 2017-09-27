module.exports = {
  "title": "Button",
  "default": "primary",
  "collated": true,
  "status": "ready",
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
    "name": "Secondary",
    "context": {
      "btn-classes": "btn--secondary",
      "label": "Filter results"
    },
  }, {
    "name": "bordered",
    "label": "Bordered (Secondary)",
    "context": {
      "btn-classes": "btn--secondary btn--border",
      "label": "Add a person"
    },
  }, {
    "name": "link",
    "label": "Link",
    "context": {
      "btn-classes": "btn--link",
      "label": "Cancel"
    },
  }, {
    "name": "neutral",
    "label": "Neutral / Disabled",
    "context": {
      "btn-classes": "btn--neutral",
      "label": "Neutral"
    },
  }]
}
