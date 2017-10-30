# Javascript sdk for rehive api

### About

This is the javascript sdk for the Rehive APIs.

### Installation

via NPM:

`$ npm install rehive`

via CDN:

`https://cdn.jsdelivr.net/npm/rehive@0.1.1/build/rehive.min.js`

or use the minified file in the `build` folder

### Getting started

Initialize the sdk with: `window.rehive = new Rehive(config);`

`config` is an configuration object, config options:

* {}

* {apiVersion: 3}

* {authToken: "authenticationTokenHere"}

* {apiVersion: 3, authToken: "authenticationTokenHere"}

Default settings are set as API version 3, and that is the only version supported currently

### Documentation and usage

For more detailed documentation and usage [Docs](https://docs.rehive.com/).

License
-------------
<a href=/LICENSE target="_blank">MIT</a> license.
