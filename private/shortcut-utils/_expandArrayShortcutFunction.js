const matchesProperty = require('./_matchesProperty');

function expandArrayShortcutFunction(array) {
  return matchesProperty(array[0], array[1]);
}

module.exports = expandArrayShortcutFunction;
