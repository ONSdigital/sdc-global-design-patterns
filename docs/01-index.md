---
title: Leading Design - Fractal Demo
---

This is a demo of the [Fractal](http://github.com/frctl/fractal) web interface. The full source code for this demo repository is [available on Github](https://github.com/frctl/demo). Have a poke around!

## About this demo

This demo has been built using design elements extracted from the [Leading Design conference](http://leadingdesignconf.com/) site. It is not a complete inventory of components from the site, but just a subset of useful examples. It is also _not_ intended to be the simplest possible example of how you can use Fractal - instead the focus is on demonstrating some of the slightly more advanced features that Fractal offers.

Again, it's worth checking out the [source code on Github](https://github.com/frctl/demo) (especially the `fractal.js` file and the components) to get a better understanding for how it has been put together.

### Naming and organisation

Fractal lets you organise and name your components however you like. The way it's been done in this demo is just an example - you should use whatever format best suits your own project's needs.

### Components

The example components use Handlebars for their template engine. This is the default template engine that comes with Fractal.

The components use a mix of different [configuration file formats](https://github.com/frctl/fractal/blob/master/docs/configuration-files.md) in order to demonstrate the available possile options.

### Documentation

The documentation pages (including this one!) have been configured to use Nunjucks as a template engine, as opposed the default of Handlebars. Documentation pages are also passed through a Markdown parser after compilation.

### Web UI Theme

This demo uses the default Fractal theme &mdash; [Mandelbrot](https://github.com/frctl/demo) &mdash; with some simple customisation options applied.
