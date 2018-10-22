---
title: Analytics
label: Google Analytics
---

### Implementation on a component

By adding the following to elements&hellip;

1. `data-ga="click"`
  - attaches the Google Analytics **click** 'event' to this element.
  - also available as events:
    - `error` checks for the error attribute on load and tracks the event if found.
    For example when an error panel is displayed to the user the following can be added to the error [panel](/components/detail/panel):
    > `data-ga="error" data-ga-category="error" data-ga-action="error-validation" data-ga-label="error_type = email validation failure"`
    - `visible` checks every 2 seconds for the visible attribute and tracks the event each time it is found.
2. `data-ga-category="accordion"`
  - sets the component event category recorded by GA.
3. `data-ga-action="Toggle all panels"`
  - provides detail on the action this element triggered.
4. `data-ga-label="Show all"`
  - provides detail on the action this element triggered.

#### Example usage
> `<button class="btn btn--secondary btn--small js-collapsible-toggle-all u-wa--@xs" data-close-all-label="Hide all" data-open-all-label="Show all" aria-hidden="true" data-ga="click" data-ga-category="accordion" data-ga-action="Toggle all panels" data-ga-label="Show all">Show all</button>`

### Implementing Google Analytics (analytics.js) script

Add the [following code](#example) to the `<head>` of the site.

Ensure that the service/application sets its `nonce` attribute to avoid failing the Content Security Policy (CSP).

- [Additional information](https://developers.google.com/web/fundamentals/security/csp/#if_you_absolutely_must_use_it)

When implementing Google Analytics (GA) set the following attribute to ensure that we are not retaining or passing information needlessly:

`ga('set', 'anonymizeIp', true);`

- [Google Analytics anonymizeIp implementation docs](https://developers.google.com/analytics/devguides/collection/analyticsjs/ip-anonymization)
- [Google Analytics anonymizeIp background info](https://support.google.com/analytics/answer/2763052?hl=en)


### Example

> `<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-xxxxxxxx-y', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');
    </script>`

Replace `UA-xxxxxxxx-y` with the [propertyID](https://support.google.com/analytics/answer/1032385) of the property you wish to track.
