function deepClone(object) {
  if (object === null) return null;
  if (object === undefined) return undefined;
  if (typeof object !== 'object') return object;

  const clone = Array.isArray(object) ? [] : {};

  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = object[key];

    if (typeof value === 'object' && value !== null) {
      clone[key] = deepClone(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
}

module.exports = deepClone;
