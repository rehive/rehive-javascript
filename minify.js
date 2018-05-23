var compressor = require('node-minify');
 
// Using UglifyJS
compressor.minify({
  compressor: 'uglifyjs',
  input: ['./promisePolyfill.js','./fetch.js','./rehive.js'],
  output: 'build/rehive.min.js',
  callback: function (err, min) {
    if (err) {
      console.log("ERROR", err);
    }
    console.log(min);
    
  }
});
 