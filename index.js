const arrays = require('./arrays');
const collections = require('./collections');
const objects = require('./objects');

module.exports = {
  ...arrays, ...collections, ...objects,
};
