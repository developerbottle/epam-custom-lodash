const forEach = require('../private/object-utils/_forEach');

function merge(object, ...sources) {
  const result = object;

  forEach(sources, (source) => {
    forEach(source, (newValue, key) => {
      if (!(key in result)) result[key] = undefined;

      if (newValue !== undefined) {
        const oldValue = result[key];
        if (typeof oldValue === 'object' && typeof newValue === 'object') {
          if (oldValue === null || newValue === null
              || (Array.isArray(newValue) && !Array.isArray(oldValue))) {
            result[key] = newValue;
          } else {
            result[key] = merge(oldValue, newValue);
          }
        } else {
          result[key] = newValue;
        }
      }
    });
  });

  return result;
}

module.exports = merge;
