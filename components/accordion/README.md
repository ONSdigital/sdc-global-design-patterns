## Accordion
List of items with collapsable content with buttons to expand content.

### Accordion Class
* Create an instance with a madatory trackEvent Function parameter

### Module
* Optionally pass a trackEvent function to be instantiated with every Accordion instance created
(not configurable before calling domready).

### Usage
Use class composition in the HTML DOM to define component elements

#### Applies to whole accordion
* `js-accordion` Root accordion element (Mandatory - define an accordion component instance/scope)
* `js-accordion-content` Accordion content area (Mandatory - define all accordion content)
* `js-accordion-open-all` Text label and trigger to expand all accordion segments
* `js-accordion-close-all` Text label and trigger to collapse all accordion segments

#### Applies to each segment
* `js-accordion-title` A title/button trigger for a single accordion segment
* `js-accordion-body` The expanding/collapsing content body for a single accordion segment
* `js-accordion-preview` Text label shown alongside title to describe content-expanding action when closed
* `js-accordion-close` Text label shown alongside title to describe content-collapsing action when open
