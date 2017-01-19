module.exports = {
  "title": "Input",
  "default": "text",
  "variants": [{
    "name": "text",
    "label": "Text",
    "context": {
      "label": "Textfield",
      "label_text": "Enter some text",
      "label_target": "text-input",
      "label_class": " venus"
    },
  }, {
    "name": "multiline",
    "status": "wip",
    "context": {
      "label": "Multline",
      "label_text": "Feedback",
      "label_target": "input--multiline",
      "label_class": "input--textarea js-charlimit-input"
    },
  }, {
    "name": "checkbox",
    "context": {
      "label": "Checkbox",
      "label_text": "Bacon",
      "label_target": "checkbox",
      "label_class": "label--inline venus"
    },
  }, {
    "name": "radio",
    "status": "ready",
    "context": {
      //"label": "Radio",
      "label_text": "Bacon",
      "label_target": "radio",
      "label_class": "label--inline venus"
    },
  }, {
    "name": "radio other",
    "status": "prototype",
    "context": {
      "label_text": "Other",
      "label_target": "radio",
      "label_class": "label--inline venus"
    },
  }, {
    "name": "radio description",
    "status": "prototype",
    "context": {
      "label_text": "Radio label desc",
      "label_target": "radio",
      "label_class": "label--inline venus"
    },
  }, {
    "name": "select",
    "status": "wip",
    "context": {
      "label": "Select",
      "label_text": "Select",
      "label_target": "select",
      "label_class": "input--select"
    },
  }, {
    "name": "Number Currency",
    "status": "prototype",
    "context": {
      "label_text":"How many whole pounds are in your wallet?",
      "label_target": "input_id",
      "placeholder": "e.g. 100"
    },
  }, {
    "name": "Number Percentage",
    "status": "prototype",
    "context": {
      "label_text": "Enter a percentage",
      "label_target": "input_id",
      "placeholder": "e.g. 23"
    }
  }]
}
