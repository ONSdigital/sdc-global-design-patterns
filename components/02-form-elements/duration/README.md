### Rationale
Inline component for input values representing different units of time.

### Label
Label is the full name of the unit and must be human readable.

### Usage

The duration `.fieldgroup` requires the additional `.fieldgroup--duration` class on the `<fieldset>` element.

A `<div>` with the classes `input-type input-type--unit` is required to wrap the `<input>` and `<abbr>` elements.  

The `<input>` element requires `input--with-unit input--block`. 

The `<abbr>` element which contains the unit requires the classes `input-type__type input-type__type--group`.

The default `<abbr>` width is set at `2.9rem`. There are two further width options which can be accessed using the following classes:

`input-type__type--wide` - provides a width of `3.5rem` 

`input-type__type--x-wide` - provides a width of `4.3rem`


### Scope
Global

### Dependencies
* `/components/02-form-elements/input/`
* `/components/02-form-elements/input-type/`
* `/components/02-form-elements/label/`
* `assets/sass/partials/vars/_forms.scss`
