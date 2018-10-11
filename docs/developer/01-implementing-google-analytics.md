---
title: Analytics
label: Google Analytics
---

### Implementation

By adding the following to elements&hellip;

1. `data-ga="click"`
  - attaches the Google Analytics click 'event' to this element.
2. `data-ga-category="accordion"`
  - sets the component event category recorded by GA.
3. `data-ga-action="Toggle all panels"`
  - provides detail on the action this element triggered
4. `data-ga-label="Show all"`
  - provides detail on the action this element triggered

#### Example usage
> `<button class="btn btn--secondary btn--small js-collapsible-toggle-all u-wa--@xs" data-close-all-label="Hide all" data-open-all-label="Show all" aria-hidden="true" data-ga="click" data-ga-category="accordion" data-ga-action="Toggle all panels" data-ga-label="Show all">Show all</button>`
