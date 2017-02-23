module.exports = {
  "title": "Input",
  "default": "text",
  "collated": false,
  "variants": [{
    "name": "text",
    "label": "Text",
    "context": {
      "label": "Textfield",
      "label_text": "Enter some text",
      "label_for": "text-input",
      "label_inline": false
    },
  }, {
    "name": "checkbox",
    "context": {
      "label_text": "Bacon",
      "label_for": "checkbox",
      "label_inline": true
    },
  }, {
    "name": "radio",
    "status": "ready",
    "context": {
      "label_text": "Bacon",
      "label_for": "radio",
      "label_inline": true
    },
  }, {
    "name": "select",
    "status": "wip",
    "context": {
      "label": "Select",
      "label_text": "Select",
      "label_for": "select"
    },
  }]
}
