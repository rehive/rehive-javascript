const minify = require('@node-minify/core');
const uglifyJS = require('@node-minify/uglify-js');

minify({
  compressor: uglifyJS,
  input: './rehive.js',
  output: 'build/rehive.min.js',
})
  .then(min => {
    console.log(min);
  })
  .catch(err => {
    console.log("ERROR", err);
  });