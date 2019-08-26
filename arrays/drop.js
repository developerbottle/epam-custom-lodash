const forEach = require('../private/object-utils/_forEach');
const push = require('../private/array-utils/_push');

function drop(array, count = 1) {
  const dropped = [];

  forEach(array, (value) => {
    push(dropped, value);
  }, count);

  return dropped;
}

module.exports = drop;
