// Simple wrapper to avoid ES module interop issues
const rehiveReact = require('../../dist/react.js');

// Export using CommonJS style to avoid interop issues
module.exports = {
  AuthProvider: rehiveReact.AuthProvider,
  useAuth: rehiveReact.useAuth,
  RehiveClient: rehiveReact.RehiveClient,
};