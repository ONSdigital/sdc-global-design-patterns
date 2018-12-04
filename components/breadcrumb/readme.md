### Rationale
#### To provide the user with a way-finding structure

A breadcrumb trail consists of a list of links to the parent pages of the current page in hierarchical order. It helps users find their place within a website or web application. This should be placed before a page’s main content.

- The set of links is structured using an **ordered** list to provide semantic structure.
- A `nav` element labeled `Breadcrumb` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
- To prevent screen reader announcing the visual separators between links, they are added via CSS:
  - The separators are part of the visual presentation that signifies the breadcrumb trail. This is already semantically represented by the `nav` element with its `aria-label` of Breadcrumb. Therefore using a display technique that is not used by screen readers prevents redundant and potentially distracting verbosity.

#### Implementation
When implementing breadcrumbs ensure that the output is inline with **no** whitespace.

    <li class="breadcrumb__item"><a href="#Another thing" class="breadcrumb__link u-fs-s">Another thing</a></li><li class...

**Not**

    <li class="breadcrumb__item">
      <a href="#Another thing" class="breadcrumb__link u-fs-s">Another thing</a>
    </li>

### Research
Based upon [W3 principles](https://w3c.github.io/aria-practices/examples/breadcrumb/index.html)

### Usage

#### Scope
Global

#### Dependencies
* `/components/_breadcrumb.scss`
* `vars/_colours.scss`
