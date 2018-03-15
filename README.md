# eQ Patterns

https://onsdigital.github.io/sdc-global-design-patterns/

## Prerequisites

- get familiar with Fractal http://fractal.build/guide
- nodejs
- Yarn `npm install yarn --global`
- Gulp `yarn global add gulp-cli`

## Getting started

1. Install dependencies with `yarn`
2. Run with browsersync `yarn start`

## Pull requests

1. Review pull request and comment as appropriate.
2. Approved pull requests should then be pulled by approver and a `deploy` run to update the published pattern library.

## Deploy

- Deploy to [Github Pages](https://onsdigital.github.io/sdc-global-design-patterns/) with `yarn deploy`

## CDN

- Merging to `master` also deploys the build to the CDN and uses the Pattern Library `master` commit short hash as a folder.
- To access the CDN resources use the `master` branch commit short hash as folder.
- CDN URLs are the following pattern (`https://cdn.ons.gov.uk/sdc/[short hash]/css/styles.css`).
- The short hash of `master` is viewable on the repository code page for the [master branch](https://github.com/ONSdigital/sdc-global-design-patterns/tree/master) or by using `git log --pretty=format:"%h" --max-count=1` on the master branch in your CLI.

  ### Releasing

  Create a GitHib release with a Semantic version number.
  When a new release is created that release version will then be available on the CDN
  e.g. `https://cdn.ons.gov.uk/sdc/[short hash]/css/styles.css` will be available at `https://cdn.ons.gov.uk/sdc/[release version]/css/styles.css`


