const forEachWhile = require('../private/object-utils/_forEachWhile');
const push = require('../private/array-utils/_push');

function take(array, count = 1) {
  const taken = [];

  const takenSize = Math.min(count, array.length);
  forEachWhile(array, (stop, value) => {
    push(taken, value);

    if (taken.length === takenSize) stop();
  });

  return taken;
}

module.exports = take;
