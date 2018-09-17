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
* `aria-controls="NAME"` - Refers to the `tabpanel` element associated with the tab.
* `aria-expanded="true/false"` - Indicates the state of the associated `tabpanel`.
* `aria-selected="true/false"` - Indicates if the current `tab` is selected.
 
Each `collapsible__body` element is given:
* `aria-labelledby="TITLE_ID"` - Indicates the associated title with the current content.
* `aria-hidden="true/false"` - If `false` a screenreader will not read out the content.
* `role="tabpanel"` - Indicates that the element is a content panel with associates `tab`.

#### Components
* `/components/_collapsible.scss`
* `/components/_collapsible.js`
* `/components/_icons.scss`
* `/components/_button.scss`
