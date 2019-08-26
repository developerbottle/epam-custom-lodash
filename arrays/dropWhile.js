const forEachWhile = require('../private/object-utils/_forEachWhile');
const expandShortcutFunction = require('../private/shortcut-utils/_expandShortcutFunction');

const identity = require('../utils/identity');

const drop = require('./drop');

function dropWhile(array, predicate = identity) {
  const iteratee = expandShortcutFunction(predicate);

  let result = [];

  forEachWhile(array, (stop, value, index) => {
    if (!iteratee(value, index, array)) {
      result = drop(array, index);
      stop();
    }
  });

  return result;
}

module.exports = dropWhile;
