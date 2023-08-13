# @ui-block

Opinionated React Component Library that I am building as an ongoing learning journey in Frontend land.

## Toolchain

- `Typescript`: To develop the library code with type safety in mind. During build process, it is used only to perform type checking.
- `React`: UI library to build the components. In future, I would like to switch to `Preact` or Web Components.
- `Vite`: Transpile typescript code to all required targets using `tsconfig.json` file then bundle the output efficiently. Besides, it has a great Developer Experience due to native ESM support during development phase.
- `Vanilla-Extract`: CSS in TS library with **zero runtime requirement**
- `Storybook`: To develop the components in isolation and perform UI testing besides generating documentation
- `Vitest`: unit test the components.
