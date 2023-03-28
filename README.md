<p align="center">
  <img src="https://user-images.githubusercontent.com/47917765/227205614-44a1cd68-f504-487f-9755-86648b3ee761.gif" alt="Screen" />
</p>

# Welcome to Jumpstart React Template

This is a starter template that includes the most efficient practices I've learned after struggling with the setup of React apps.

The project is designed to streamline development processes and exclude setup headaches,
allowing developer to focus on building the application logic without worrying about the underlying infrastructure.

It's also recommended to maintain your own version of the template to ensure you have a reliable starting point for future React apps.

## Features

- Instant server start with ESBuild
- Fast Hot Module Replacement (HMR) and automatic code splitting for fast initial load times
- Full TypeScript support and CSS modules with PostCSS
- Optimized production build with tree shaking and minification
- Easy deployment with a built-in production server and static file generation
- Automatic deployment to GitHub Pages for easy publishing and sharing of your app
- (Ongoing) Built-in testing with Jest and React Testing Library

## What's inside?

- [Vite](https://vitejs.dev/) for lightning-fast web app bundling and running
- [React](https://reactjs.org/) | [React Router](https://reactrouter.com/) | [Redux Toolkit](https://redux-toolkit.js.org/) for building dynamic and scalable user interfaces
- [TypeScript](https://www.typescriptlang.org/) for type-safe and error-free coding
- [TailwindCSS](https://tailwindcss.com/) with [JIT mode](https://v2.tailwindcss.com/docs/just-in-time-mode) for effortless and customizable styling
- [Framer-motion](https://www.framer.com/motion/) for creating awesome animations
- [ESLint](https://eslint.org/) with [airbnb-typescript config](https://www.npmjs.com/package/eslint-config-airbnb-typescript) for creating excellent code that meets industry standards
- [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) to ensure that code quality issues are detected before committing changes

Additionally, the template comes with preconfigured settings, scripts, and folder structure that allows easy usage right out of the box.

## Getting started

Before getting started, make sure you have a package manager like npm installed on your machine

- [Create a new repository from this template](https://github.com/AlexTsimba/react-ts-tailwind-boilerplate/generate)
- Clone the repository to your local machine using `git clone <repository-url>`
- Navigate to the project directory by running `cd <project-name>`, then open it by running `code .`
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server

Alternatively, you can download the project files by running the following command in your terminal:

```
npx degit AlexTsimba/react-ts-tailwind-boilerplate project-name
```

## Styling

This template uses TailwindCSS as it's styling framework.
To fit the styles to your needs, modify the `tailwind.config.cjs` file.

The `tailwind-config-viewer` package is included to visually display the TailwindCSS configuration.
You can view the configuration by running the command `npm run tailwind-viewer`.
[Demo with default config](https://rogden.github.io/tailwind-config-viewer/)

The `classnames` package is included for conditional CSS rules.

``` js
import classNames from 'classnames';
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true, bar: false }); // => 'foo'
```

For more information on how to use classnames, please read the [official documentation](https://github.com/JedWatson/classnames)

## Linting and Formatting

The following scripts are available for linting and formatting your code:

- `npm run lint` : Runs eslint to check for any syntax errors and coding style issues in your code
- `npm run format`: Formats your code using Prettier to ensure consistent and readable code
- `npm run fix-style`: Runs `format` and `lint --fix` sequentially to fix any formatting and style issues in your code

Make sure to have ESLint and Prettier plugins installed in your code editor to see linting and formatting errors and warnings.
It's recommended to run these scripts frequently during development to ensure that your code meets the standards.
Additionally, these scripts can be run automatically during your CI/CD pipeline to catch any issues before your code is deployed.

## CI/CD pipeline

The project's GitHub Actions workflow automates the build and deployment process, triggered by a push event to the `main` branch.
The workflow uses the `peaceiris/actions-gh-pages` action for deployment,
pushing the production build files in `./dist` to the `gh-pages` branch.

Before deploying, ensure you've granted permissions for workflows to run by setting it to.
"Read and write" in Settings > Actions > General > Workflow permissions.

To enable automatic deployment to GitHub Pages, update the `homepage` field in your `package.json` file to your GitHub Pages site's URL.

```js
// package.json

{
  "name": "project-name",
  "homepage": "https://my-username.github.io/project-name",
  ...
}
```

Also, make sure to update the `base` field in `vite.config.ts`

```js
// vite.config.ts

export default defineConfig({
  base: '/project-name',
  ...
});
```

**Manual deployment**

In addition to the automated deployment process, you can also manually deploy your app's current version by executing the following command in your terminal:

```
npm run deploy
```

This command will initiate the build process and deploy the generated files to your GitHub Pages site, using the same configuration as the automated process.

## Contributing

Contributions are welcome! Here are some ways you can contribute:

- Submit an issue with bug reports or feature requests.
- Fork the repository and create a new branch for your feature or bug fix, then open a pull request.
- Review and test pull requests submitted by other contributors.

## License

This project is licensed under the MIT License.
