module.exports = {
  title: "Table",
  collated: true, // Pulls all variants into one summary
  status: "wip",
  "variants": [
    {
      "name": "default",
      "label": "Basic table"
    },
    {
      "name": "data-dense",
      "label": "Compact table for data heavy applications.",
      "context": {
        "table-class": " table__dense",
        "caption": "Use this table variant for for data heavy applications",
        "datadense": "true"
      }
    }
  ]
}
