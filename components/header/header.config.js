module.exports = {
  "title": "Header",
  "status": "ready",
  "default": "header",
  "collated": true,
  "preview": "@preview__page", /* As it is a layout level element use page preview */
  "variants": [{
    "name": "header",
    "label": "Header",
    "context": {
      "title": "ONS Business Surveys",
      "button": "Save and complete later",
      "services":[
        {
          "text": "Help",
          "link": "#1"
        },
        {
          "text": "Account",
          "link": "#1"
        },
        {
          "text": "Sign out",
          "link": "#2"
        }
    ],
    "main":[
      {
        "text": "Surveys",
        "link": "#1"
      },
      {
        "text": "Messages",
        "link": "#1"
      }
    ],
  },
  }]
}
