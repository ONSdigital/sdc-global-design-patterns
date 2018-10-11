---
title: Development
label: Yarn & Gulp etc.
---

### Yarn & Gulp

Commands available in the CLI.

- `yarn start` - start local instance of the fractal build
- `yarn compile_assets` - compiles all local assets, .js and .css
- `gulp test` - runs all karma tests (contained at: /tests/karma/spec/) and outputs results in CLI
  - Documentation on [writing tests](./writing-karma-tests)

#### Other
- `yarn cache clean` - Running this command will clear the global cache. It will be populated again the next time `yarn` or `yarn install` is run.
