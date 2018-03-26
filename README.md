# Rehive Javascript SDK

### About

This is the client side Javascript SDK for the Rehive API. It can be used with any client side web application (React, Angular, Vue, etc) or included as a CDN in your HTML file

If you would like to use the Rehive API in a server side NodeJS Application, please consider using the [REST Endpoints](https://docs.rehive.com/?shell#introduction) instead.

### Installation

via NPM:

`$ npm install rehive`

via CDN:

`https://cdn.jsdelivr.net/npm/rehive@{version_number}/build/rehive.min.js`

or use the minified file in the `build` folder

### Getting started

Initialize the sdk with: `window.rehive = new Rehive(config);`

`config` is an configuration object, config options:

* {}

* {apiVersion: 3}

* {apiToken: "authenticationTokenHere"}

* {apiVersion: 3, apiToken: "authenticationTokenHere"}

Default settings are set as API version 3, and that is the only version supported currently

### Documentation and usage

For more detailed documentation and usage [Docs](https://docs.rehive.com/).

License
-------------
<a href=/LICENSE target="_blank">MIT</a> license.
