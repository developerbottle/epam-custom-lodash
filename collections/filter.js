const forEach = require('../private/object-utils/_forEach');
const push = require('../private/array-utils/_push');
const expandShortcutFunction = require('../private/shortcut-utils/_expandShortcutFunction');

const identity = require('../utils/identity');

function filter(collection, predicate = identity) {
  const iteratee = expandShortcutFunction(predicate);

  const filtered = [];

  forEach(collection, (value, key) => {
    if (iteratee(value, key, collection)) push(filtered, value);
  });

  return filtered;
}

module.exports = filter;
