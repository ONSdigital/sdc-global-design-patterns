## Tabs

Used to collate facets of content within a closely related context. Provides a way for users to quickly scan across the subject areas of content.

Tabs work well when the primary content block is displayed in the first tab. Subsequent tabs can show further detail and/or deeper levels that relate to the primary content (but this isn't a strict rule).

It's important to use tab labels which are succinct, preferably single words to avoid the tab layout breaking. Furthermore, reducing the number of tabs will ensure that the layout doesn't break.

### Usage

The typical tab display will show on viewports that are equal to or greater than `640px`. 

For viewports `>=640px` the following `aria` attributes will be attached to the `DOM` via javascript on load:

**The `ul.tab__list` element is given:**
* `role="tablist"` - Convey to screenreaders that the element serves as a container for a set of tabs.

**Each `li.tab__list-item` element is given:**
* `role="presentation"` - Convey to screenreaders that this element does not have any functional, interactive, or structural relevance implied.

**Each `a.tab` element is given:**
* `role="tab"` - Indicates the element serves as a tab control.
* `aria-controls="NAME"` - Refers to the `.tabs__panel` element associated with the `.tab`.
* `aria-selected="true/false"` - Indicates if the current `tab` is selected.
 
**Each `.tab__panel` element is given:**
* `aria-labelledby="TITLE_ID"` - Indicates the associated tab with the current content.
* `role="tabpanel"` - Indicates that the element is a content panel with associated `tab`.

For viewport `<640px` tabs are displayed as a list and function as a table of contents (TOC). All panels are displayed in the order they are structured. Clicking a TOC link will jump the user to the associated panel. This is also the solution for non javascript users.

A visually hidden `<h2>` should be added above the tabs list to provide further information and context to screenreader users. This will also be displayed for non javascript users.

### Research

* We need to carry out more research to to validate the usage of tabs for deivering content. 
* We need to understand similar components and the context when it should be used i.e tabs or accordion.
