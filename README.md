
# PRS Core Brand Styleguide
This repo contains the core brand styles and components for PRS. It's based off the [FE Boilerplate](https://bitbucket.org/thisiszone/fe-boilerplate) and is to serve as a foundation for any new PRS projects. 

The project PRS For Music also has its own styleguide, which is more detailed, however very project specific. That can be viewed here: https://prs-style-guide.azurewebsites.net/. It’s protected by Office 365 login and everyone at Zone automatically has access. 

There is also a generic account for access:
Username: prs@zone-preview.co.uk
Password: GNoma8088


## Project structure
This repo uses a simple folder structure which can be modified as necessary depending on the project. 

    .
    ├── /bootstrap
    ├── /node_modules        // created and managed by Yarn
    ├── /public
    │   ├── /build           // created and managed by Webpack
    │   ├── /fonts
    │   ├── /images
    │   ├── favicon.ico
    │   └── manifest.json
    ├── /src
    │   ├── /javascript
    │   └── /styles   
    ├── /styleguide
    │   ├── /pages
    │   └── /styles
    ├── .babelrc
    ├── .browserslistrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── .stylelintignore
    ├── .stylelintrc
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── webpack.config.js
    ├── webpack.parts.js
    └── yarn.lock


## Getting Started
To set up this repo, you will need Node installed. If you do not have Node set up you can find it [here](https://nodejs.org/en/download/). You will also need [Yarn](https://yarnpkg.com/en/docs/install). Currently this repo is set up using Webpack as a bundler and Yarn as a package manager. NOTE: Any new packages should be installed with the `$ yarn add [package]`. The only exception to this is if the package will only ever be run on a developers machine (e.g. BrowserSync) - for this case, use `$ yarn add [package] --dev`. Follow the [Yarn guide](https://yarnpkg.com/en/docs/usage) for more information.

There is no task manager set up as the basic build and linting tasks are handled by Webpack, however a task manager can be added if required by the project. 

We are using currently Bootstrap on PRS, however this can be removed and replaced with another library if necessary. 

To begin, clone repo to a suitable location. In this directory, run `$ yarn` to pull in all dependencies.


## Overview

### Public
`/public`

This folder should contain all the files you would like to be available to the public (fonts, images, etc).

Ensure the site has a `favicon.ico`.

### JavaScript
`/javascript`

All pre-compiled JavaScript source lives here. The root of the folder contains the bundles. If you need to add a new bundle, be sure to add it to the `webpack.config.js` file.

We're using [Babel](https://babeljs.io/) to allow us to use the latest version of JavaScript through syntax transformers. The [ENV](http://babeljs.io/docs/plugins/preset-env/) preset is installed by default. This will provide you with all you need to compile ES2015 down to ES5 based on the browser targets outlined in `.babelrc`. If you plan to support [React/JSX](http://babeljs.io/docs/plugins/preset-react/) or something a little more experimental, [take a look at the transforms available](http://babeljs.io/docs/plugins/#transform-plugins). Babel config is found in `.babelrc`.

Webpack is used to run Babel and any other transforms, such as minification. The compiled JavaScript and source map file(s) will be saved to `/public/build` in production.

Prior to Babel, [ESLint](http://eslint.org/docs/rules/) is run to highlight any stylisitic and syntactical JavaScript issues. Rules used are listed in `.eslintrc`.

[StyleLint](http://stylelint.io/) is used to highlight stylistic and syntactic CSS issues. Rules are listed in `.stylelintrc`. A comprehensive list of all the available rules [can be found here](http://stylelint.io/user-guide/rules/).

In production the final JavaScript will be minified.

### Styles
`/styles`

We're using' [Sass](http://sass-lang.com/) and [Autoprefixer](https://autoprefixer.github.io/) to create CSS. The configuration for Autoprefixer can be found in `.browserslistrc` and `postcss.config.js`.

Webpack is used to run Sass and another transforms, such as Autoprefixer and minification. The compiled CSS and source map file(s) will be saved to `/public/build` in production.

In production the final CSS will be minified and extracted to a separate CSS file.


## Build

### Development
Sass and JavaScript will be processed and watched for changes. Scripts will be linted and Webpack dev server will be started. These assets will be served from memory via the dev server, no files are written to disk.

*Run (in this directory):*

    `$ yarn watch`

Then visit http://localhost:3000

If you don't want to watch your files and just compile you can run:

    `$ yarn build`

### Production
Sass and JavaScript will be processed and minified. CSS is extracted into separate files. File names contain a cache busting hash. The manifest.json in `/public/build` can be using by BE to map the file names.

*Run (in this directory):*

    `$ yarn production`


## References
* [Zone CSS style guide](https://zonecode.codebasehq.com/projects/zone-tech-documentation/notebook/Zone%20CSS%20Style%20Guide.md) - for Zone CSS best practice and standards - [View default linting rules](https://github.com/zone/stylelint-config-zone/blob/master/index.js)
* [Zone JavaScript style guide](https://zonecode.codebasehq.com/projects/zone-tech-documentation/notebook/JS%20Style%20Guide.md) - for Zone JavaScript best practice and standards - [View default linting rules](https://github.com/zone/eslint-config-zone/blob/master/index.js)

## Editor plugins

### Atom
* [StyleLint - CSS/Sass linting](https://atom.io/packages/linter-stylelint)
* [ESLint - JavaScript linting](https://atom.io/packages/linter-eslint)
* [EditorConfig - Consistent editor config](https://atom.io/packages/editorconfig)
* [Pigments - Displays colours in real time](https://atom.io/packages/pigments)


