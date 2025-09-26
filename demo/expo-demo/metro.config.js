const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Watch the local rehive package for changes
config.watchFolders = [
  path.resolve(__dirname, '../..'),
];

module.exports = config;