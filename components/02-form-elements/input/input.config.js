module.exports = {
  "title": "Input",
  "default": "text",
  "collated": false,
  "status": "ready",
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
      "label_inline": true,
      "legend":"Select your favourite topping",
      "options": [
        {"option_text":"Bacon", "option_value": "bacon", "label_for":"bacon", "label_text":"Bacon", "label_inline":true},
        {"option_text":"Olives", "option_value": "olives", "label_for":"olives", "label_text":"Olives", "label_inline":true},
      ]
    },
  }, {
    "name": "select",
    "status": "wip",
    "context": {
      "label": "Select",
      "label_text": "Select your favourite cartoon character",
      "label_for": "select",
      "label_description": "",
      "options": [
        {"option_text":"Select an option", "option_value":"", "selected":"selected", "disabled":"disabled"},
        {"option_text":"Bart Simpson", "option_value":"bart"},
        {"option_text":"Homer Simpson", "option_value":"homer"},
        {"option_text":"Marge Simpson", "option_value":"marge"},
        {"option_text":"Lisa Simpson", "option_value":"lisa"},
        {"option_text":"Ned Flanders", "option_value":"ned"},
        {"option_text":"Bugs Bunny", "option_value":"bugs"},
        {"option_text":"Charlie Brown", "option_value":"charlie brown"},
        {"option_text":"Snoopy", "option_value":"snoopy"},
      ],
    },
  }, {
    "name": "percentage",
    "status": "ready",
    "name": "percentage",
    "context": {
      "label": "Percentage",
      "label_text": "%"
    },
  }]
}
