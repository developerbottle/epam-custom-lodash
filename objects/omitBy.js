const forEach = require('../private/object-utils/_forEach');
const identity = require('../utils/identity');

function omitBy(object, predicate = identity) {
  const result = {};

  forEach(object, (value, key) => {
    if (!predicate(value, key)) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = omitBy;
