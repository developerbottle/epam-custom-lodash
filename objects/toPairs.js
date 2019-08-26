const map = require('../collections/map');

function toPairs(object) {
  if ((object instanceof Set) || (object instanceof Map)) {
    return Array.from(object.entries());
  }

  return map(object, (value, key) => [`${key}`, value]);
}

module.exports = toPairs;
