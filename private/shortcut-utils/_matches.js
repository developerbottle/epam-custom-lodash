const deepEquals = require('../object-utils/_deepEquals');

function matches(object) {
  return value => deepEquals(value, object);
}

module.exports = matches;
