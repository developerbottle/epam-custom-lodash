const forEachWhile = require('../private/object-utils/_forEachWhile');

function includes(collection, value, fromIndex = 0) {
  if (typeof collection === 'string' || collection instanceof String) {
    return collection.includes(value, fromIndex);
  }

  let result = false;

  forEachWhile(collection, (stop, nextValue) => {
    if (nextValue === value) {
      result = true;
      stop();
    }
  }, fromIndex);

  return result;
}

module.exports = includes;
