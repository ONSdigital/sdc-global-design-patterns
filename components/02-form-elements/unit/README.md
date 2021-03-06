### Rationale
Unit consist of Length, Area and Volume. All units are localized for 'en_GB'.

### Variants
Adding units is done in the unit.config.js by adding variants.

### Collated
All units are collated onto one page.

### Context
Units consist of two context items; label and unit.

### Label
Label is the full name of the unit and must be human readable.

### Unit
Unit is the localized symbol for each unit.

### Usage

A `<div>` with the classes `input-type` is required to wrap the `<input>` and `<abbr>` elements.

The `<input>` element requires `input-type__input`.

The `<abbr>` element which contains the unit requires the classes `input-type__type`.


### Scope
Global

### Dependencies
* `/components/02-form-elements/input/_input.scss`
* `/components/02-form-elements/input-type/_input-type.scss`
* `assets/sass/partials/vars/_forms.sccs`
