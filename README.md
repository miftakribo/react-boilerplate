React boilerplate
=================
[![dependencies Status](https://david-dm.org/miftakribo/react-boilerplate/status.svg)](https://david-dm.org/miftakribo/react-boilerplate)
[![devDependencies Status](https://david-dm.org/miftakribo/react-boilerplate/dev-status.svg)](https://david-dm.org/miftakribo/react-boilerplate?type=dev)

The minimal stater-kit react application including dev environment with hot reload plugin to enable live-editing React Component and also including production environment with minified file.

## Feature
* webpack v3.0.0
* es6
* redux-thunk
* hot reload

## Usage
>### Install
> npm Install
>### run development
> npm run dev
>### build
> npm run build
>### production
> npm run prod

## Folder Structure (sample)
* /app
  * /layout -> component for layouting
    * /box
    * /nav
    * /button
    * /card
  * /components -> reusable components
    * /datepicker
    * /table
    * /widget
  * /constants -> define constant that importable
  * /containers -> smart component
    * /home
    * /about
  * store.js
  * routes.js
  * index.js
