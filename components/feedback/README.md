## Feedback
The feedback form provides users with a way of giving feedback about a service without leaving the current task.

The form is collapsed and positioned before the footer and submits without refreshing the page. The user is notified of the successful submission of feedback.

### Usage
Functionality is provided using the `collapsible` module and specifically the `collapsible--simple` variant. Using this provides the `js`, `css` and `aria` accessibility attributes as well as `no-js` fallback.

Optionally pass event tracking `data` attributes for Google Analytics using `data-ga="click"`, `data-ga-category="accordion"`, `data-ga-action="ACTION_NAME"`, `data-ga-label="LABEL_NAME"` 

The form uses the module `form-submitter.js` to handle the submission without requiring a page refresh. 

### Accessibility
The definition is made accessible by using `aria` labels which are implemented on `domready` by javascript.

Each `collapsible__title` element is given:
* `aria-controls="NAME"` - Refers to the `collapsible__body` element associated with the `collapsible__title`.
* `aria-expanded="true/false"` - Indicates the state of the associated `collapsible__body`.
 
Each `collapsible__body` element is given:
* `aria-labelledby="TITLE_ID"` - Indicates the associated title with the current content.
* `aria-hidden="true/false"` - If `false` a screenreader will not read out the content.

### Progressive enhancement
When javascript is disabled the form will be hidden. The `collapsible__title` should be a link to a standalone feedback page which can be used when the user does not have javascript.

#### Components
* `/components/_collapsible.scss`
* `/components/_collapsible.js`
* `/components/_icons.scss`
* `/components/_button.scss`
