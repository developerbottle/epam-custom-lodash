const omitBy = require('../objects/omitBy');
const identity = require('../utils/identity');

function pickBy(object, predicate = identity) {
  return omitBy(object, (value, key) => !predicate(value, key));
}

module.exports = pickBy;
