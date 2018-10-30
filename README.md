[![GitHub release](https://img.shields.io/github/release/ONSdigital/sdc-global-design-patterns.svg)](https://github.com/ONSdigital/sdc-global-design-patterns/releases) [![GitHub issues](https://img.shields.io/github/issues/ONSdigital/sdc-global-design-patterns.svg)](https://github.com/ONSdigital/sdc-global-design-patterns/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/ONSdigital/sdc-global-design-patterns.svg)](https://github.com/ONSdigital/sdc-global-design-patterns/pulls)
 ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) [![Fractal](https://img.shields.io/badge/fractal-v1.1.7-%23C03982.svg)](https://github.com/frctl/fractal)


# eQ Patterns

The published output of the pattern library is available here:

https://sdc-global-design-patterns.netlify.com/

## Prerequisites

- get familiar with Fractal http://fractal.build/guide
- nodejs
- Set up a new environment for this project with [nodeenv](https://github.com/ekalinin/nodeenv)
- Gulp `npm i -g gulp-cli`

## Getting started

1. Install dependencies with `npm i`
2. Run with browsersync `npm run start`

## Pull requests

1. Review pull request and comment as appropriate.
2. Approved pull requests should then be pulled by approver and a `deploy` run to update the published pattern library.

## Deploy

Deployment is handled via CI to [Netlify](https://www.netlify.com), each merge to master updates the documentation at: https://sdc-global-design-patterns.netlify.com/

## CDN

- Merging to `master` also deploys the build to the CDN and uses the Pattern Library `master` commit short hash as a folder.
- To access the CDN resources use the `master` branch commit short hash as folder.
- CDN URLs are the following pattern (`https://cdn.ons.gov.uk/sdc/[short hash]/css/styles.css`).
- The short hash of `master` is viewable on the repository code page for the [master branch](https://github.com/ONSdigital/sdc-global-design-patterns/tree/master) or by using `git log --pretty=format:"%h" --max-count=1` on the master branch in your CLI.

### Releasing

Create a GitHib release with a Semantic version number.

When a new release is created that release version will then be available on the CDN
e.g. `https://cdn.ons.gov.uk/sdc/[short hash]/css/responsive.css` will be available at `https://cdn.ons.gov.uk/sdc/[release version]/css/responsive.css`

#### Key files for use
Replace v1.5.0 for the current release version: [![GitHub release](https://img.shields.io/github/release/ONSdigital/sdc-global-design-patterns.svg)](https://github.com/ONSdigital/sdc-global-design-patterns/releases)

- https://cdn.ons.gov.uk/sdc/v1.5.0/css/responsive.css
- https://cdn.ons.gov.uk/sdc/v1.5.0/css/fixed.css
- https://cdn.ons.gov.uk/sdc/v1.5.0/scripts/bundle.min.js
