## Rationale

### General
All typographic elements are controlled via css classes. By default, headings have all their font-sizes reset to `1rem`, with the typographic hierarchy enforced by the 'type scale': `u-fs-xl`, `u-fs-l`, `u-fs-m`, `u-fs-r--b` and `u-fs-r`. This follows the principle of separating presentation from structure.

Font sizes can be triggered also at certain breakpoints. Just suffix any font size class with `--@{breakpoint}`, e.g. `u-fs-m--@l`

To apply a size to an element add the appropriate type scale class e.g. `<h2 class="u-fs-l">A heading</h2>`

For further information on typography, fonts, sizes and weights, visit the [typography docs](/docs/typography).

### List

...tbc

### Icons

A system is available for using icons with typographic elements. Icons must be used in `.svg` format and placed within the `/assets/img/icons` folder within the pattern library and prefixed with the file name `icon--`. `.svg` allows for a small file size, vector based format which allows the icon to scale without loss of quality or increase in weight.

### Usage

The system uses a `@mixin` called `create-icon` which can be added to the `_icons.scss` file and takes arguments to adjust the properties of the element. Using the `@mixin` will produce a class that can be used in the markup of a template. The class will be prefixed with `.icon--` and followed by a name which is specified in the `@include` i.e. `.icon--print`.  Below shows the declaration with all available arguments and the default values:

`@include create-icon($iconName, $className:null, $hoverIconName: null, $focusIconName: null, $width: 1.3rem, $top: 2px, $position: left, $btn: false)`

`$iconName`: Required. The naming convention requirement is to use the saved svg icon name without the `icon--` prefix. So, for an icon named `icon--print.svg` the `$iconName` would be `print`.

`$className`: Optional. Sets a default value of `null`. Useful when the same icon is required more than once and in a different context with different parameters. If a `$className` value is passed in, the value will be used to generate the class name and will override the `$iconName`.

`$hoverIconName`: Optional. Sets a default value of `null`. Provides the option to have a `:hover` variant of the icon. Uses the same naming convention as the `$iconName` property. By default the icon provided will also be used for the `:focus` state unless otherwise specified below.

`$focusIconName`: Optional. Sets a default value of `null`. Provides the option to have a `:focus` variant of the icon. Uses the same naming convention as the `$iconName` property. If only the `$hoverIconName` is provided, the `:focus` state will use that icon.

`$width`: Optional. Sets a default value of `1.3rem`. Provides the option to adjust the size of the icon. The default size of `1.3rem` works well with the base font-size of `1rem` which is used for paragraphs, lists and buttons. The width is set in `rem` so that it scales with text across different viewport sizes.

`$top`: Optional. Sets a default value of `2px`. The default value should work in most cases but the `top:` attribute can be adjusted if necessary with this parameter.

`$position`: Optional. Sets a default value of `left`. Add a value of `right` or omit for the default `left` to position the icon at the start or end of the element.

`$btn`: Optional. Sets a default value of `false`. To add an icon to a `button` element include the `$btn` argument and set the value to `true`. This will include the necessary attributes to render the button with an icon correctly.
