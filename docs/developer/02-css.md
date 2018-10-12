---
title: CSS Utility classes
label: CSS / SCSS
---
#### Contents
- [Margins](#margins)
- [Padding](#padding)
- [Display](#display)
- [Font](#font)
- [Media queries](#media-queries)

### Margins

| Class | Sizes | Description |
|-------|---------------|-|
|`.u-m-` - all,<br>`.u-mt-` - top,<br>`.u-mr-` - right,<br>`.u-mb-` - bottom<br> `.u-ml-` - left,|Sizes:<br> - `xs` = 0.5rem<br/>- `s` = 1rem<br/>- `m` = 1.5rem<br/>- `l` = 2rem<br/>- `xl` = 3rem<br/>- `no` = 0rem / none|Range of margins available.<br>For example: `.u-ml-xl` - margin left extra large (3rem)|

### Padding
| Class | Sizes | Description |
|-------|---------------|-|
|`.u-p-` - all,<br>`.u-pt-` - top,<br>`.u-pr-` - right,<br>`.u-pb-` - bottom<br> `.u-pl-` - left,|Sizes:<br> - `xs` = 0.5rem<br/>- `s` = 1rem<br/>- `m` = 1.5rem<br/>- `l` = 2rem<br/>- `xl` = 3rem<br/>- `no` = 0rem / none|Range of padding available.<br>For example: `.u-pl-xs` - padding left extra small (0.5rem)|



### Display

| Class | Use | Description |
|-------|---------------|-|
|**`.u-vh`**<br>`.u-visuallyhidden`|Visually hidden|Hides the element from the visual rendering of the page. Element is left available for assistive user agents|
|`.u-d-no`|Display none|Removes the element from the available DOM|
|`.u-d-b`|Display block||
|`.u-no-js-hide` use with `.no-js`||Hide when js is not available|
|`.u-no-js-show` use with `.has-js`|||
|`.u-nowrap`||Enforces a nowrap rule for the element. Example uses include financial value or date|

### Font

| Class | Use | Description |
|-------|---------------|-|
|`.u-fw-n`<br>`.u-fw-b`|Font weights|Set font weight to bold or normal|
|`.u-tt-u`|Uppercase font|Text transform to uppercase|
|`.u-fs-i`|Italic|Font style italic (Note: for exceptional use cases only)|
|`.u-td-no`|Text decoration|Remove text-decoration|

### Media queries

> `@mixin mq($from: none, $to: none)`

Use of media queries in component authoring.

#### Example
Some attributes applied to `nav__list` between `xs` and `s` breakpoints.

><pre><code>.nav__list {
  @include mq(xs,s) {
    padding: 0 0 1rem 0;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }
}</code></pre>

Breakpoints available are (`partials/vars/_grid.scss`):
- **xs**: 300px
- **s**: 500px
- **m**: 740px
- **l**: 980px
- **xl**: 1300px
- **xxl**: 1600px
