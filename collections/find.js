const forEachWhile = require('../private/object-utils/_forEachWhile');
const expandShortcutFunction = require('../private/shortcut-utils/_expandShortcutFunction');

const identity = require('../utils/identity');

function find(collection, predicate = identity, fromIndex = 0) {
  const iteratee = expandShortcutFunction(predicate);

  let result;

  forEachWhile(collection, (stop, value, key) => {
    if (iteratee(value, key, collection)) {
      result = value;
      stop();
    }
  }, fromIndex);

  return result;
}

module.exports = find;
