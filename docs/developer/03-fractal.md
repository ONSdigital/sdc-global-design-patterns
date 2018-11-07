---
title: Development
label: yarn & Gulp etc.
---

### yarn & Gulp

Commands available in the CLI.

- `yarn start` - start local instance of the fractal build
- `yarn compile_assets` - compiles all local assets, .js and .css
- `gulp test` - runs all karma tests (contained at: /tests/karma/spec/) and outputs results in CLI
  - Documentation on how karma tests are implemented in the pattern library and [writing tests](./writing-karma-tests).

#### Other
- `yarn cache clean` - Running this command will clear the global cache. It will be populated again the next time `yarn` is run.
