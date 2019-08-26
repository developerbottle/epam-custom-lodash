const forEach = require('../private/object-utils/_forEach');
const map = require('../collections/map');

function zip(...arrays) {
  const zipped = [];

  const maxSize = Math.max(...map(arrays, array => array.length));
  for (let i = 0; i < maxSize; i += 1) {
    const group = [];

    forEach(arrays, (array, index) => {
      group[index] = array[i];
    });

    zipped[i] = group;
  }

  return zipped;
}

module.exports = zip;
