const matches = require('./_matches');

function expandObjectShortcutFunction(object) {
  return matches(object);
}

module.exports = expandObjectShortcutFunction;
