module.exports = {
  "title": "List",
  "name": "List",
  "collated": true,
  "status": "ready",
  "default":"unordered",
  "variants": [{
    "name": "unordered",
    "label": "Unordered",
    "context": {
      "list-el": "ul",
      "list-class": "",
      "list-items": [
        {
          "item": "VAT",
        },
        {
          "item": "Internet sales"
        }
      ]
    },
  }, {
    "name": "Ordered",
    "label": "Ordered",
    "context": {
      "list-el": "ol",
      "list-class": "",
      "list-items": [
        {
          "item":"First step to complete",
        },
        {
          "item":"Second item to perform",
        },
        {
          "item":"Last item of the three in this list"
        }
      ]
    },
  }, {
    "name": "bare",
    "label": "Bare",
    "context": {
      "list-el": "ul",
      "list-class": "list list--bare",
      "list-items": [
        {
          "item": "A bare list"
        },
        {
          "item": "a second list item"
        }
      ]
    },
  }, {
    "name": "boxes",
    "label": "Boxes",
    "context": {
      "list-el": "ul",
      "list-class": "list list--boxes",
      "list-items": [
        {
          "item": "1234"
        },
        {
          "item": "ABCD"
        },
        {
          "item": "7890"
        }
      ]
    },
  }, {
    "name": "errors",
    "label": "errors",
    "context": {
      "list-el": "ul",
      "list-class": "list--errors",
      "list-items": [
        {
          "item": "First error to correct"
        },
        {
          "item": "Second error to correct"
        }
      ]
    },
  }
]}
