### Rationale
#### To provide the user with a with a way of selecting multiple items or a single opposing value.


#### Implementation

#### Accessibility
**Voiceover**

The ‘Or’ between the groups of options is removed with the addition of `aria-hidden`; producing a single list of options to be heard. The ‘Or’ is instead inserted into the label of the opposing option. This second ‘Or’ is visually hidden within the option but available for aria playback. It is paired with a visually hidden ‘Selecting this will uncheck all other checkboxes’ to provide sufficient context to the user surrounding the use of this option.

Content passed to `.js-exclusive-checkbox-alert` is used to communicate change to the user when the opposing value has been selected. This is necessary as selecting the opposing value deselects values previously selected by the user and the deselection must be announced.

This makes the playback as follows:

> - Solid fuel
> - Other
> - Or, No central heating. Selecting this will uncheck all other checkboxes

When the user checks ‘No central heating’ the audio playback is:

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
