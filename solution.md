# Form Wizard Demo

> Simple but robust and fully tested React Application. Complete with unit testing as well as E2E.

> TLDR; more of the tech specs and definitions is in readme.md file, because this is shown by default in github or other git providers.

### Approach
Built in React since this the framework that I am quite familiar with. 
I am keeping it as simple as I can without any help from any UI libraries or any states.

Each common components are separated inside `components` directory. Check `readme.md` file to see the file structure.

### CRA vs VITE?
I am still using CRA because I don't think vite is currently supporting eslint on run-time during development.
This is the biggest reason why I am still using CRA, will probably move to Vite once all linting and formatting can be done during build and run time.

### State Management
This app is too small to use Context or Redux.

### Minimal Props
As much as possible, I am minimizing passing of props to have a loose component

### Why not Nextjs?
NextJs is great and all but again, this app is too small. Using it will be an overkill.

### User Experience
1. Hitting the back button in summary page will retain the previous values, this is simply done using query parameters to keep it as simple as much as possible.
2. Form validations - although IRL this should be done in the backend as well - client form validation is also performed to enhanced the UX.

### Testing
1. Most if not all scenarious is in the E2E test using cypress `npm test`
2. Unit tests are done using Jest/Snapshots which I am a great fan :) `npm run jest`


## DEMO
[LIVE DEMO HERE](https://keithics-form-wizard.netlify.app/)

![DEMO](./demo.gif)

# Requirements
1. Nodejs 16.x and later (but this should work with older versions as well)
2. React 16.x
3. VSCode or Webstorm

## Development NPM commands

| Command          | Description                                                        |
|------------------|--------------------------------------------------------------------|
| `npm start`      | Development mode                                                   |
| `npm run lint`   | Checks linting and formatting issues in `./src`                    |
| `npm run pretty` | Fixes formatting of any ts files inside  `./src`                   |
| `npm run jest`   | Runs all unit and integrations tests eg: `./src/api/**/**.test.ts` |
| `npm run test`   | Runs E2E tests                                                     |


# Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `build` folder.


The full folder structure of this app is explained below:

| Name                                    | Description                                                                                                |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------|
| `.eslintignore`                         | Ignore list for eslint during linting process                                                              |
| `.eslintrc`                             | Config settings for ESLint code style checking                                                             |
| `.prettierrc`                           | Prettier config                                                                                            |
| `build`                                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship               |
| `jest.config `                          | Jest config                                                                                                |
| `LICENSE`                               | License file                                                                                               |
| `node_modules**`                        | Contains all your npm dependencies                                                                         |
| `src**`                                 | Contains your source code that will be compiled to the dist dir                                            |
| `src/components** `                     | Common React Components                                                                                    |
| `src/components/containers/**.tsx `     | Common React Components Containers such as Cards, Nav or Main Container                                    |
| `src/components/forms/**.tsx `          | Common React form components                                                                               |
| `src/components/forms/**.interface.ts ` | Common React form components interface                                                                     |
| `src/components/insurance/**.tsx `      | All React components that is specific to `insurance module`                                                |
| `src/data/**.ts`                        | All hard coded data, Demo purposes only                                                                    |
| `src/lib/**.helper.ts`                  | Helper functions                                                                                           |
| `src/lib/insurance.helper.ts`           | Helper functions specific to `insurance module`                                                            |
| `src/lib/__snapshots__/**`              | Jest Snapshots                                                                                             |
| `src/pages/**.tsx`                      | React page components                                                                                      |
| `src/index.tsx`                         | React main entry point                                                                                     |                                                                                     |
| `src/index.css`                         | React main CSS file                                                                                        |                                                                                     |
| `src/rotuer.tsx`                        | React router main file                                                                                     |                                                                                     |
| `jest.config.js`                        | Used to configure Jest running tests written in TypeScript                                                 |
| `package.json `                         | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) |
| `tsconfig.json `                        | Config settings for compiling server code written in TypeScript                                            |
| `tailwind.config.json `                 | Config settings for Tailwind                                                                               |


# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package          | Description                                                  |
|------------------|--------------------------------------------------------------|
| react            | React Library                                                |
| react-dom        | React Library for DOM                                        |
| react-hook-form  | React Hooks for forms                                        |
| react-router-dom | React router for web                                         |
| react-scripts    | React scripts                                                |
| web-vitals       | Shows how your pages perform, based on real world usage data |

## `devDependencies`

| Package               | Description                                                             |
|-----------------------|-------------------------------------------------------------------------|
| @types/*              | Dependencies in this folder are `.d.ts` files used to provide types     |
| @typescript-eslint/*  | Eslinst TS plugins                                                      |
| babel-eslint          | Babel TS plugins                                                        |
| @tailwindcss/*        | Taiwind CSS Library                                                     |
| autoprefixer          | Required for Tailwind/React                                             |
| cypress               | E2E Library                                                             |
| eslint                | Linter for JavaScript and TypeScript files                              |                                                     |
| eslint-config/*       | Eslint config                                                           |
| eslint-plugin*        | Eslint plugins                                                          |
| prettier              | An opinionated code formatter                                           |
| pretty-format         | Stringify any JavaScript value for prettier                             |
| start-server-and-test | Runs and waits server before testing                                    |
| ts-jest               | A preprocessor with sourcemap support to help use TypeScript with Jest. |
| ts-node               | Enables directly running TS files.                                      |
| typescript            | JavaScript compiler/type checker that boosts JavaScript productivity    |

# Issues
1. Jest RANDOMBYTESREQUEST error in local machine please see [here](https://stackoverflow.com/questions/65653226/jest-and-randombytesrequest-open-handles)


## License
Copyright (c) keithics. All rights reserved.

