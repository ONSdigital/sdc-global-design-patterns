### Rationale
Collection of longer passages of text from users was required for feedback and messages.

_Rationale for the addition of a character limit to be added here._

* helps user provide content in a limited number of characters
* tells the user how many characters they have remaining, and counts down as they type
* provides additional feedback for assistive technology so that all users are are aware of the character limit
* when the limit is reached, no further characters are captured

related: [GDS prototype](https://govuk-charcount-prototype.herokuapp.com/)

### Research
Research undertaken here.

The **user need** in this instance was generated from a necessity to avoid reaching the character limit imposed by the WAF.

DAC feedback

### Usage


#### Scope
Global

#### Analytics
If the character limit is reached then the analytics `event` of `Error` is sent with an action `Textarea limit reached` and the label `Limit of {character-limit} reached/exceeded`.

#### Dependencies
`character-limit.js`
`analytics.js`
`domready.js`
