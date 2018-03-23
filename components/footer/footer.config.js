module.exports = {
  "title": "Footer",
  "status": "ready",
  "collated": false,
  "preview": "@preview__page", /* As it is a layout level element use page preview */
  "default": "primary",
  "variants": [{
    "name": "primary",
    "label": "Primary",
    "context": {
    },
  }, {
    "name": "eq",
    "label": "EQ",
    "status": "wip",
    "context": {
      "links":[
      {
        "link_text": "Contact us",
        "link_url": "/contact-us"
      },
      {
        "link_text": "Cookies and privacy",
        "link_url": "/cookies-privacy"
      }],
    },
  }
]
}
