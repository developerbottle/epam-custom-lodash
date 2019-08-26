function arrayForEachWhile(array, iteratee, fromIndex) {
  let isStopped = false;

  function stop() {
    isStopped = true;
  }

  for (let i = fromIndex; i < array.length; i += 1) {
    if (isStopped) break;

    iteratee(stop, array[i], i, array);
  }
}

function objectForEach(object, iteratee, fromIndex) {
  arrayForEachWhile(Object.keys(object), (stop, key) => {
    iteratee(stop, object[key], key, object);
  }, fromIndex);
}

function forEachWhile(target, iteratee, fromIndex = 0) {
  if (Array.isArray(target)) {
    arrayForEachWhile(target, iteratee, fromIndex);
  } else if (typeof target === 'string') {
    arrayForEachWhile(target.split(''), iteratee, fromIndex);
  } else if (typeof target === 'object') {
    objectForEach(target, iteratee, fromIndex);
  }
}

module.exports = forEachWhile;
