module.exports = {
  "title": "Footer",
  "status": "ready",
  "collated": true,
  "preview": "@preview__page", /* As it is a layout level element use page preview */
  "default": "full",
  "variants": [{
    "name": "full",
    "label": "Full",
    "status": "ready",
    "context": {
    },
  }, {
    "name": "transactional",
    "label": "Transactional",
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
  }, {
    "name": "internal-service",
    "label": "Internal service",
    "status": "wip",
    "context": {
      "links":[
      {
        "link_text": "Contact us",
        "link_url": "/contact-us"
      },
      {
        "link_text": "Page generated: 09:39 on 15 June 2018"
      },
      {
        "link_text": "Service owner: SDC"
      }
    ],
    },
  }, {
    "name": "poweredbyons",
    "label": "Powered by ONS",
    "status": "wip",
    "context": {
    },
  }, {
    "name": "poweredbyons-transactional",
    "label": "Transactional - Powered by ONS",
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
  }, {
    "name": "poweredbyons-transactional-cy",
    "label": "Transactional (Cymraeg) - Powered by ONS",
    "status": "wip",
    "context": {
      "links":[
      {
        "link_text": "Cysyllwch a ni",
        "link_url": "/contact-us"
      },
      {
        "link_text": "Cwcis ac preifatrwydd",
        "link_url": "/cookies-privacy"
      }],
    },
  }
]
}
