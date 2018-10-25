module.exports = {
  title: "Table",
  collated: true, // Pulls all variants into one summary
  status: "wip",
  "variants": [
    {
      "name": "default",
      "label": "Basic table",
      "context": {
        "caption": "A simple table with a caption",
      }
    },
    {
      "name": "data-dense",
      "label": "Compact table for data heavy applications.",
      "context": {
        "table-class": " table--dense",
        "caption": "Use this table variant for for data heavy applications",
        "datadense": "true"
      }
    },
    {
      "name": "numeric",
      "label": "Numeric table",
      "context": {
        "caption": "A basic table with numeric values"
      }
    },
    {
      "name": "headers",
      "label": "Two header table",
      "context": {
        "caption": "A table with column and row headers"
      }
    },
    {
      "name": "footers",
      "label": "Table with a footer",
      "context": {
        "tfoot": "true",
        "caption": "A basic table showing a footer"
      }
    }
  ]
}
