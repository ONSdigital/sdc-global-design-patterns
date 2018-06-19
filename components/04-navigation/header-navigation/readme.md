## Rationale
The header navigation component is a horiztontal navigation system for adding multiple navigation elements to the header of a service. A service can contain one or many of these elements to create a hierarchical navigation system.

## Types

### Main navigation
This provides the main navigation component for user's to move around the main areas of a service. This would include all top level content pages which are contextual to the function that the service is providing. It's positioned below the main header as the primary means of navigating the service.

### Secondary navigation
This provides additional navigation for the user which is not aligned to the sites primary function. Types of secondary navigation include links to; user profile or account, help/support, language switching etc. It's positioned at the top right of the header.

### Save
Provides a button so that the user can sign out of the service. The button will be displayed as a singular element to the right of the service title for prominence.

## Implementation

### Main navigation
This component needs to be added before the closing `</header>` of the main header component. The html for this component starts with `<div class="header__nav">`. 

### Secondary navigation
This component needs to be added within the `<div class="header__top">` and should be placed within a grid controlled div `grid__col col-6@s` next to the logo.

### Save
Use a button component with the class `btn--ghost` and place within a grid controlled div `u-fr u-d-no--@xs@s` next to the `header__title` parent `grid__col`. 

## Mobile

The navigation system for viewports under `500px` collapses and is toggled via a menu icon. If you're using any of the 3 navigation types you will need to add the **main navigation** element `<div class="header__nav">` to your page. If you're using secondary or save navigation types then duplicate the links and add them with `nav__list` with the class `nav__item u-d-no--@s` of the `<div class="header__nav">`. The `u-d-n--xx` class will control when the element is shown or hidden between different breakpoints. 

In addition you will need to add the button toggle to show and hide the navigation menu. Add a button component with classes `btn--mobile u-fr u-d-no--@s` and place next to the `header__title` parent `grid__col`. Javascript handles the menu functionality.

## Research
Based upon [W3 principles](https://w3c.github.io/aria-practices/#menu)

#### Scope
Global

#### Dependencies
* `/components/04-navigation/_navigation.scss`
* `/components/header/_header.scss`
* `/components/03-grid/grid.scss`
* `vars/_colours.scss`
* `vars/_grid.scss`
* `/components/04-navigation/main-nav.js`
