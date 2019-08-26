const forEach = require('../private/object-utils/_forEach');
const push = require('../private/array-utils/_push');
const expandStringShortcutFunction = require('../private/shortcut-utils/_expandStringShortcutFunction');

const identity = require('../utils/identity');

function map(collection, iteratee = identity) {
  const mapFunction = typeof iteratee === 'string' ? expandStringShortcutFunction(iteratee) : iteratee;

  const mapped = [];

  forEach(collection, (value, key) => {
    push(mapped, mapFunction(value, key, collection));
  });

  return mapped;
}

module.exports = map;
