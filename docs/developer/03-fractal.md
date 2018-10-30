---
title: Development
label: npm & Gulp etc.
---

### npm & Gulp

Commands available in the CLI.

- `npm run start` - start local instance of the fractal build
- `npm run compile_assets` - compiles all local assets, .js and .css
- `gulp test` - runs all karma tests (contained at: /tests/karma/spec/) and outputs results in CLI
  - Documentation on how karma tests are implemented in the pattern library and [writing tests](./writing-karma-tests).

#### Other
- `npm cache clean` - Running this command will clear the global cache. It will be populated again the next time `npm i` is run.
