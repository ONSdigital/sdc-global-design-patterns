module.exports = {
  title: "Table",
  collated: false, // Pulls all variants into one summary
  preview: "@preview__full-width",
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
      "label": "Compact table",
      "context": {
        "table-class": " table--dense",
        "caption": "Use this table variant for data heavy applications",
        "datadense": "true"
      }
    },
    {
      "name": "responsive",
      "label": "Responsive table",
      "context": {
        "table-class": " table--responsive",
        "caption": "Use this table variant when stacked rows are suitable for mobile views"
      }
    },
    {
      "name": "responsive-example",
      "label": "Responsive table examples",
      "context": {
        "table-class": " table--responsive",
        "caption": "Use this table variant when stacked rows are suitable for mobile views"
      }
    },
    {
      "name": "scrollable",
      "label": "Scrollable table",
      "context": {
        "caption": "Table will scroll when the viewport is smaller than the table width"
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
