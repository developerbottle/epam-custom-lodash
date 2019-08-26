const forEach = require('../private/object-utils/_forEach');
const push = require('../private/array-utils/_push');

function compact(array) {
  const compacted = [];

  forEach(array, (value) => {
    if (value) push(compacted, value);
  });

  return compacted;
}

module.exports = compact;
