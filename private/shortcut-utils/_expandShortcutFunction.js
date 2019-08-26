const expandArrayShortcutFunction = require('./_expandArrayShortcutFunction');
const expandObjectShortcutFunction = require('./_expandObjectShortcutFunction');
const expandStringShortcutFunction = require('./_expandStringShortcutFunction');

function expandShortcutFunction(shortcut) {
  if (Array.isArray(shortcut)) return expandArrayShortcutFunction(shortcut);
  if (typeof shortcut === 'object') return expandObjectShortcutFunction(shortcut);
  if (typeof shortcut === 'string') return expandStringShortcutFunction(shortcut);

  return shortcut;
}

module.exports = expandShortcutFunction;
