## Accordion
Used to condense large sections of related content on a page. 

Allows a user to quickly scan a collated group of content titles.

Implement for content that is not critical for the user to be able to progress with their task but is relevant or required to be included on the page.

### Usage
Functionality is provided using the `collapsible` module. Using this provides the `js`, `css` and `aria` accessibility attributes as well as `no-js` fallback.

Optionally provide a "Show/Hide all" toggle (shown in example).

Optionally pass event tracking `data` attributes for Google Analytics using `data-ga="click"`, `data-ga-category="accordion"`, `data-ga-action="ACTION_NAME"`, `data-ga-label="LABEL_NAME"` 

### Accessibility
The accordion is made accessible by using `aria` labels which are implemented on `domready` by javascript.

The `collapsible__content` element is given:
* `role="tablist"` - Convey to screenreaders that the element serves as a container for a set of tabs. 
* `aria-multiselectable="true"` - Indicate more than one of the `tabs` can be selected at once.

Each `collapsible__title` element is given:
* `role="tab"` - Indicates the element serves as a tab control. Provides a title for its associated `tabpanel`.
* `aria-controls="NAME"` - Refers to the `collapsible__body` element associated with the `collapsible__title`.
* `aria-expanded="true/false"` - Indicates the state of the associated `collapsible__body`.
* `aria-selected="true/false"` - Indicates if the current `tab` is selected.
 
Each `collapsible__body` element is given:
* `aria-labelledby="TITLE_ID"` - Indicates the associated title with the current content.
* `aria-hidden="true/false"` - If `false` a screenreader will not read out the content.
* `role="tabpanel"` - Indicates that the element is a content panel with associates `tab`.

### Progressive enhancement
When javascript is disabled the component will show all content and remove all visual cues that provide affordance that the component is clickable. The presentation is consistent with standard content blocks of headings and paragraphs. Use an appropriate heading tag (`h2`, `h3` etc) for the `accordion__title` to provide the correct scemantic hierarchy to the document with the rest of the page. 

#### Components
* `/components/_collapsible.scss`
* `/components/_collapsible.js`
* `/components/_icons.scss`
* `/components/_button.scss`
