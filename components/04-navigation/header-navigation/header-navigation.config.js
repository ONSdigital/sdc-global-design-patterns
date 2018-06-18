module.exports = {
  "title": "Header navigation",
  "default": "main",
  "status": "wip",
  "preview": "@preview__page",
  "collated": false,
  "variants": [{
    "label":"Save",
    "name":"save",
    "context": {
      "button": "Save and sign out",
    }
  },{
    "label":"Main",
    "name":"main",
    "context": {
        "main":[
          {
            "text": "Surveys",
            "link": "#1",
            "classes": "nav__item--active",
            "aria-current": true
          },
          {
            "text": "Messages",
            "link": "#1"
          }
        ],
      }
    },{
      "label":"Secondary",
      "name":"secondary",
      "context": {
        "services":[
          {
            "text": "My account",
            "link": "#1"
          },
          {
            "text": "Help",
            "link": "#1"
          }
        ],
      }
    },{
      "label":"Combination",
      "name":"combination",
      "context": {
        "button": "Save and sign out",
        "services":[
          {
            "text": "My account",
            "link": "#1"
          },
          {
            "text": "Help",
            "link": "#1"
          }
        ],
        "main":[
          {
            "text": "Surveys",
            "link": "#1",
            "classes": "nav__item--active",
            "aria-current": true
          },
          {
            "text": "Messages",
            "link": "#1"
          }
        ]
      }
    }
  ]
}
