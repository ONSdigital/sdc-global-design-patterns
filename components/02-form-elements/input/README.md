## Rationale
Inputs are used wherever users enter answers to surveys.

## Variants
There are numerous variants of input to allow for precise collection of data.
### Text

#### Units and Currency
Additional specialist variants of the standard text input are the [unit](unit), [currency](currency) and [percentage](input--percentage).

### Checkbox
Checkboxes allow the user to select a number of answers from a fieldset.

#### Checkbox (other, please specify)
The addition of an '[Other option](input--checkbox-other)' is available. This variant is used where supplemental information is required from the user to describe the nature of their answer. This additional input is restricted to a single line text [input](input) with a descriptive [label](label).

### Radio
Radio buttons allow for a mutually exclusive selection to be made from a range of answers.
#### Radio (other, please specify)
The addition of an '[Other option](input--radio-other)' is available. This variant is used where supplemental information is required from the user to describe the nature of their answer. This additional input is restricted to a single line text [input](input) with a descriptive [label](label).

## Context
Context vary for each input but label is used for human readable aspect and `label_text` is input content.

## Scope
Global

### Dependencies
* `/components/02-form-elements/input/_input.scss`
* `/components/02-form-elements/input-type/_input-type.scss`
* `input--password.js`
