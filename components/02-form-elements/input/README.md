## Rationale
Inputs are used wherever users enter answers to surveys.

## Variants

### Text

#### Units and Currency
Additional specialist variants of the standard text input are the [unit](unit), [currency](currency) and [percentage](input--percentage)

### Checkbox

### Radio

### Select
These should **never** be used for short lists of items that could be better served by using radio options.

GDS advise against using dropdown select boxes as they have poor accessibility and can be cumbersome to use on a mobile device.

They hide the choices and can confuse users as they may not understand what they’re being asked before they see the answers by interacting with the element.

Where large lists are involved, some users may be unaware that they can scroll through the entire list to find the appropriate answer.

Because the expanded list cannot be styled, this may cause usability issues where the dropdown itself may be difficult to read for users with visual impairments.

_(Note: Input variants can be added via input.config.js.)_

## Context
Context vary for each input but label is used for human readable aspect and
'label_text' is input content.

## Scope
Global

### Dependencies
* `/components/02-form-elements/input/_input.scss`
* `/components/02-form-elements/input-type/_input-type.scss`
