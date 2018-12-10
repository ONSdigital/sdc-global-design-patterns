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
      "button": "Save and sign out"
    }
  },{
    "label":"Main",
    "name":"main",
    "context": {
        "main":[
          {
            "text": "Home",
            "link": "#1",
            "classes": "nav__item--active",
            "aria-current": true
          },
          {
            "text": "Search",
            "link": "#1"
          },
          {
            "text": "Record management",
            "link": "records",
            "childItems": [
              {
                "text": "Search for a record",
                "link": "#1"
              },
              {
                "text": "Create a new record",
                "link": "#1"
              }            
            ]
          },
          {
            "text": "Sampling",
            "link": "sampling",
            "childItems": [
              {
                "text": "Sampling 1",
                "link": "#1"
              },
              {
                "text": "Sampling 2",
                "link": "#1"
              }            
            ]

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
    },{
      "label":"Combination internal",
      "name":"combination-internal",
      "context": {
        "internal": true,
        "classes": "header--internal",
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
