## Rationale

These should **never** be used for short lists of items that could be better served by using radio options.

**Use with caution**

GDS advise against using dropdown select boxes as they have poor accessibility and can be cumbersome to use on a mobile device.

They hide the choices and can confuse users as they may not understand what they’re being asked before they see the answers by interacting with the element.

Where large lists are involved, some users may be unaware that they can scroll through the entire list to find the appropriate answer.

Because the expanded list cannot be styled, this may cause usability issues where the dropdown itself may be difficult to read for users with visual impairments.

## Variants
There are two key variants of the select element; **mandatory** and **optional**.

The initial option should **always** be ‘Select an option’. This is set by applying the `selected` attribute to this `option`.

#### Mandatory
By adding the `disabled` attribute to the ‘Select an option’ `option` the `select` element is made mandatory as it is not possible to select an option with no value.

#### Optional
Without the `disabled` attribute on ‘Select an option’ users are able to select an option without a value.

### Wide
By applying the `.input--block` class to the `select` element a variant which uses 100% of the available width can be implemented.

## Context

## Scope
Global

### Dependencies
* `/components/02-form-elements/input/_input.scss`
* `/components/02-form-elements/input-type/_input-type.scss`
