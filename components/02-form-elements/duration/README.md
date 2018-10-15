### Rationale
Inline component for input values representing different units of time.

### Label
Label is the full name of the unit and must be human readable.

### Usage

The duration `.fieldgroup` requires the additional `.fieldgroup--duration` class on the `<fieldset>` element.

A `<div>` with the classes `input-type input-type--unit input-type--group` is required to wrap the `<input>` and `<abbr>` elements.  

The `<input>` element requires `input--with-unit input--block`. 

The `<abbr>` element which contains the unit requires the classes `input-type__type`.


### Scope
Global

### Dependencies
* `/components/02-form-elements/input/`
* `/components/02-form-elements/input-type/`
* `/components/02-form-elements/label/`
* `assets/sass/partials/vars/_forms.scss`
