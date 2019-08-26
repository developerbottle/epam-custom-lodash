function arrayForEach(array, iteratee, fromIndex) {
  for (let i = fromIndex; i < array.length; i += 1) {
    iteratee(array[i], i, array);
  }
}

function objectForEach(object, iteratee, fromIndex) {
  arrayForEach(Object.keys(object), (key) => {
    iteratee(object[key], key, object);
  }, fromIndex);
}

function forEach(target, iteratee, fromIndex = 0) {
  if (Array.isArray(target)) {
    arrayForEach(target, iteratee, fromIndex);
  } else if (typeof target === 'string') {
    arrayForEach(target.split(''), iteratee, fromIndex);
  } else if (typeof target === 'object') {
    objectForEach(target, iteratee, fromIndex);
  }
}

module.exports = forEach;
