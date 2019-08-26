const forEachWhile = require('./_forEachWhile');

function deepEquals(object1, object2) {
  if (typeof object1 !== typeof object2) return false;

  if (typeof object1 !== 'object') return object1 === object2;

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  let result = true;
  forEachWhile(object1, (stop, value, key) => {
    if (!(key in object2)) {
      result = false;
      stop();
      return;
    }

    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof value1 !== typeof value2) {
      result = false;
      stop();
      return;
    }

    const type = typeof value1;
    if (type === 'object' || type === 'function') {
      result = deepEquals(value1, value2);
      if (!result) stop();
    } else {
      result = value1 === value2;
      if (!result) stop();
    }
  });

  return result;
}

module.exports = deepEquals;
