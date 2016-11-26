React boilerplate
=================

The minimal stater-kit react application including dev environment with hot reload plugin to enable live-editing React Component and also including production environment with minified file.

## Usage
>### Install
> npm Install
>### run development
> npm run dev
>### build
> npm run build
>### production
> npm run prod

## Dependencies
- react
- react-dom
- react-router

## devDependencies
- babel-core
- babel-loader
- babel-plugin
  - react-html-attrs - Transforms JSX class attributes into className and for attributes into htmlFor, allowing you to copy and paste HTML into your React components without having to manually edit these particular attributes each time. [source](https://github.com/insin/babel-plugin-react-html-attrs)
  - react-transform - require for hot-reload-loader [source](https://github.com/gaearon/babel-plugin-react-transform)
  - transform-decorators-legacy
  - transform-class-properties - enable to use es6 class syntax [source](https://babeljs.io/docs/plugins/transform-class-properties/)
- babel-preset:
  - es2015
  - react
  - stage-0
- cross-env
- css-loader
- file-loader
- html-webpack-plugin
- path
- react-addons-test-utils
- react-transform-hmr
- hot-reload-loader
- style-loader
- url-loader
- webpack
- webpack-dev-server
