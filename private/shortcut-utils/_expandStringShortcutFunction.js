const property = require('./_property');

function expandStringShortcutFunction(string) {
  return property(string);
}

module.exports = expandStringShortcutFunction;
