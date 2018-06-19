module.exports = {
  "title": "Button",
  "default": "primary",
  "collated": true,
  "status": "ready",
  "variants": [{
    "name": "primary",
    "label": "Primary",
    "context": {
      "label": "Save and continue"
    },
  },{
    "name": "primary_small",
    "label": "Primary (small)",
    "context": {
      "btn-classes": "btn--small",
      "label": "Start"
    },
  },{
    "name": "secondary",
    "label": "Secondary",
    "context": {
      "btn-classes": "btn--secondary",
      "label": "Add a person"
    },
  },{
    "name": "secondary_small",
    "label": "Secondary (small)",
    "context": {
      "btn-classes": "btn--secondary btn--small",
      "label": "Add"
    },
  },{
    "name": "group",
    "label": "Group",
    "context": {
      "btns" : [
        {
          "label": "Continue"    
        },
        {
          "btn-classes": "btn--secondary",
          "label": "Cancel"    
        },
      ],
    },
  },{
    "name": "header",
    "label": "Ghost",
    "context": {
      "btn-classes": "btn--ghost",
      "label": "Save and sign out"
    },
  },{
    "name": "loader",
    "label": "Loader",
    "context": {
      "btn-classes": "btn--loader is-loading",
      "label": "Upload"
    },
  },{
    "name": "menu",
    "label": "Menu toggle",
    "context": {
      "btn-classes": "u-d-b",
      "label": "Menu"
    },
  },{
    "name": "mobile",
    "label": "Mobile",
    "context": {
      "label": "Main menu",
      "bar": true
    },
  }
]
}
