---
title: The eQ Grid
---
The grid used in eQ is responsive which allows the layout to re-align to suit the device being used to view the survey.

### 600 - 1000+ Grid
Laptop (including tablet in horizontal orientation) and larger resolution devices.
![Responsive eQ Grid - Laptop and larger]({{path '/assets/img/eq-grid-responsive-large.svg'}})
### 301 - 600 and <300px Grids
Tablet (vertical orientation) and mobile devices.
![Responsive eQ]({{path '/assets/img/eq-grid-responsive-mobile-tablet.svg'}})

The responsive nature of the grid and the underlying codebase ensures that users have the best available experience regardless of their device or orientation.

Respondent home uses 8 columns for the main copy area whilst survey groups use 7 columns for content, 1 column as a gutter, then 4 columns for a navigation.

### Developer guide

Wrapping the grid in a `<div class="container">` element will give you a maximum width of `1034px`. Adding a modifier class of `container--wide` to the wrapping element will increase the maximum width to `1280px`.

A flexible grid based on __12__ columns, each column has a percentage calculated width and the margins (gutters) are fixed for each breakpoint. 

The baseline grid is based on multiples of __8px__.

| Viewport | <300px | 301 - 600 | 600 - 1000+ |
|----------|--------|-----------|-------------|
| Gutter   | 16px   | 16px      | 24px        |

### 600 - 1000+ Grid
12 columns with 24px fixed margins.
![600-1000+ Grid]({{path '/assets/img/eq-grid-600-1000px.svg'}})
### 301 - 600 and 300 Grid
12 columns with 16px fixed margins for 301-600 and 300px viewports
![301-600 and 300 Grid]({{path '/assets/img/eq-grid-300-and-301-600px.svg'}})
