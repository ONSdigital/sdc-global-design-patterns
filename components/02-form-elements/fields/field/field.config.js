module.exports = {
  "title": "Field",
  "default": "basic field",
  "collated": true,
  "status": "ready",
  "variants": [{
    "name": "Checkboxes",
    
    "context": {
      "type": "Checkboxes",
      select_all: true,
      "options": [
        {"type": "checkbox", "option_text":  "Bacon", "option_value": "bacon", "label_for":"bacon", "label_text":"Bacon", "label_inline": true},
        {"type": "checkbox", "option_text": "Olives", "option_value": "olives", "label_for":"olives", "label_text":"Olives", "label_inline": true}
      ]
    },
  }, {
    "name": "Legend",
    "context": {
      "legend": "Select your favourite pizza topping",
      "options": [
        {"type": "radio", "option_text":"Cheese", "option_value": "Cheese", "label_for":"Cheese", "label_text":"Cheese", "label_inline": true},
        {"type": "radio", "option_text":"Tomato", "option_value": "Tomato", "label_for":"Tomato", "label_text":"Tomato", "label_inline": true},
        {"type": "radio", "option_text":"Pepperoni", "option_value": "Pepperoni", "label_for":"Pepperoni", "label_text":"Pepperoni", "label_inline": true},
        
      ]
    },
  }]
}
