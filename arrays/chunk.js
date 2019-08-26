const forEach = require('../private/object-utils/_forEach');
const push = require('../private/array-utils/_push');

function chunk(array, size = 1) {
  const chunks = [];

  let nextChunk = [];

  forEach(array, (value) => {
    push(nextChunk, value);

    if (nextChunk.length === size) {
      push(chunks, nextChunk);
      nextChunk = [];
    }
  });

  if (nextChunk.length > 0) push(chunks, nextChunk);

  return chunks;
}

module.exports = chunk;
