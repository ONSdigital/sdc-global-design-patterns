---
title: Overview
---

## Development principles
We use progressive enhancement to provide the best possible chance of working for most users.

>This is because the only part of a page that you can rely on to work is the HTML. If the HTML fails there’s no web page, so you should consider the rest optional.

[GDS, Service Manual](https://www.gov.uk/service-manual/technology/using-progressive-enhancement/#start-with-html)

The document source order and outline should be logical and clear.

We aim to ensure each pattern complies with [WCAG 2.1](https://www.w3.org/TR/WCAG21/) to AA as a minimum with the intention to be AAA compliant where practical.

## Contributing to the pattern library
Before contributing to the pattern library please review the [backlog of items](#).

Ensure that the new pattern or variant is necessary - could an existing one be used instead?

If you can show a user need for the new pattern:
 - add a request for a new pattern to the backlog/issue list and email <benjamin.armstrong@ons.gov.uk>
 - produce a refined Sketch file and, or prototype code necessary to validate the work.
 - once you have a prototype that has been user tested and iterated:
  - you can create a local branch of the pattern library repository and produce a production ready version for review, include a clear rationale, documentation and

### Authoring CSS
Each component is authored as a self-contained set of code. At the minimum, this will comprise a SCSS and template file.

SCSS should be written using BEM (Block, Element, Modifier) methodology. This helps to avoid conflicts between different components.

### Authoring HTML

All HTML produced should validate and be checked to ensure that it complies with WCAG 2.1 standards.

The pattern should be tested with [assistive technology](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies) and audited locally using the following tools:

- ‘[BrowserStack](https://browserstack.com)’ - Cross-browser testing platform
- ‘[HTML_Codesniffer](https://squizlabs.github.io/HTML_CodeSniffer/)’ - A11y audit tool
- Chrome ‘[Lighthouse](https://developers.google.com/web/tools/lighthouse/)’ - A11y audit tool

Before the pattern can be accepted into the pattern library it is likely that it will need to be audited by [DAC](http://digitalaccessibilitycentre.org/) or another A11y audit organisation.

## Sketch
A [Sketch](http://www.sketchapp.com) library file ([info](https://sketchapp.com/docs/libraries/)) is maintained in parallel with the codebase of the pattern library and is available to [download here](https://drive.google.com/file/d/0B7T2bOHcgJHUdFpyNzNmSDNYWWs/view?usp=sharing).

Each component is created as a symbol or symbol set for use in designing interfaces.

## Browser support
At a minimum we test in, and support, the browsers in the following table as [defined by GDS](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices/#browsers-to-test-in):

| Operating system | Browser | Support |
|------------------|---------|---------|
| **Windows**      |Internet Explorer 8-10 | functional |
|  | Internet Explorer 11 | compliant |
|  | Edge (latest versions) | functional |
|  | Google Chrome (latest versions) | compliant |
|  | Mozilla Firefox (latest versions) | compliant |
| **macOS** | Safari 9+ | compliant |
|  | Google Chrome (latest versions) | compliant |
|  | Mozilla Firefox (latest versions) | compliant |
| **iOS** | Safari for iOS 9.3+ | compliant |
|  | Google Chrome (latest versions) | compliant |
| **Android** | Google Chrome (latest versions) | compliant |
|  | Samsung Internet (latest versions) | compliant |

## Statuses
| Status | Label |
|--------|-------|
| __Prototype__</br>Do not implement. This component may be experimental and un-tested.<br />Expect significant change before this item put to use. | <label class="Status-label" style="background-color: #FF3333; border-color: #FF3333;">Prototype</label> |
| __Testing__</br>Publicly available pattern undergoing testing.|<label class="Status-label" style="background-color: #4990E2; border-color: #4990E2;">Testing</label> |
| __Work in progress__</br>Work in progress. Implement with caution.| <label class="Status-label" style="background-color: #FF9233; border-color: #FF9233;">WIP</label> |
| __Ready__</br>Ready for use.| <label class="Status-label" style="background-color: #29CC29; border-color: #29CC29;">Ready</label> |
| __Deprecated__</br>Removed from use in live products.| <label class="Status-label" style="background-color: #CCCCCC; border-color: #29CC29;">Deprecated</label> |

### Documentation status
Documentation falls into two status levels:

| Status | Label |
|--------|-------|
| __Draft__</br>The documentation is incomplete or undergoing editorial review. | <label class="Status-label" style="background-color: #4990E2; border-color: #4990E2;">Draft</label> |
| __Ready__</br>The documentation is complete. | <label class="Status-label" style="background-color: #29CC29; border-color: #29CC29;">Ready</label> |

## Proposed documentation pattern
- __Rationale__<br />
- __Research__<br />
Any research undertaken related to this item - documented outcomes
- __Usage__<br />
When to (and not to) use this pattern - include preference for use cases for sub items.
