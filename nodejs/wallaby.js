/**
 * Wallabyjs configuration
 * @return {Object} The wallabyjs config object
 */
module.exports = function() {
  return {
    "files": ["src/**/*.js"],
    "tests": ["test/**/*Spec.js"],
    "env": {
      "type": "node"
    }
  };
};
