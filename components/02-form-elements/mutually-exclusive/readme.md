### Rationale
#### To provide the user with a with a way of selecting multiple items or a single opposing value.



#### Implementation

#### Accessibility
**Voiceover**

Content passed to `.js-exclusive-checkbox-alert` is used to communicate change to the user when the opposing value has been selected. This is necessary to comply with xxx WCAG 2.1 xxx (where an action in one area of a page is not allowed to cause an unexpected reaction elsewhere in the fieldset) ADD DETAIL TO THE DAC report ID for this item here.

The 'Or' between the main list of options and the opposing value uses `aria-hidden` to hide this from aria playback. This is done to avoid repetition of 'Or' as it is also in the opposing value label which is more relevant in the context of the aria playback when the user is navigating the checkboxes.

This makes the playback as follows:

> - Solid fuel
> - Other
> - Or, No central heating. Selecting this will uncheck all other checkboxes

When the user checks 'No central heating' the audio playback is:

> - Or, No central heating. Selecting this will uncheck all other checkboxes, unchecked, Tick box

> - checked, Or, No central heating. Selecting this will uncheck all other check boxes, Tick box
> - electric deselected. solid-fuel deselected.

### Research

### Usage
This component degrades gracefully if javascript is not available to the user. With javascript unavailable it is possible for the user to select all options without inverting the selection therefore further, server-side validation should be performed.

#### Scope
Global

#### Dependencies
* `/components/mutually-exclusive.js`
* `vars/_colours.scss`
