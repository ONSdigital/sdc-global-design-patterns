## Definition
Used to provide additional information, to define terminology or provide guidance to a user so they can better understand the content or task.

### Usage
Functionality is provided using the `collapsible` module and specifically the `collapsible--simple` variant. Using this provides the `js`, `css` and `aria` accessibility attributes as well as `no-js` fallback.

Optionally pass event tracking `data` attributes for Google Analytics using `data-ga="click"`, `data-ga-category="accordion"`, `data-ga-action="ACTION_NAME"`, `data-ga-label="LABEL_NAME"` 

### Accessibility
The definition is made accessible by using `aria` labels which are implemented on `domready` by javascript.

Each `collapsible__title` element is given:
* `aria-controls="NAME"` - Refers to the `collapsible__body` element associated with the `collapsible__title`.
* `aria-expanded="true/false"` - Indicates the state of the associated `collapsible__body`.
 
Each `collapsible__body` element is given:
* `aria-labelledby="TITLE_ID"` - Indicates the associated title with the current content.
* `aria-hidden="true/false"` - If `false` a screenreader will not read out the content.

### Progressive enhancement
When javascript is disabled the component will show all content and remove all visual cues that provide affordance that the component is clickable. The presentation is consistent with standard content blocks of headings and paragraphs. Use an appropriate heading tag (`h2`, `h3` etc) for the `accordion__title` to provide the correct scemantic hierarchy to the document with the rest of the page. 

#### Components
* `/components/_collapsible.scss`
* `/components/_collapsible.js`
* `/components/_icons.scss`
* `/components/_button.scss`
