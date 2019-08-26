const forEach = require('../private/object-utils/_forEach');
const deepClone = require('../private/object-utils/_deepClone');
const hasValueAt = require('../private/object-utils/_hasValueAt');
const getPropertyTree = require('../private/object-utils/_getPropertyTree');
const map = require('../collections/map');

function pick(object, ...paths) {
  const result = {};

  const pathsArray = Array.isArray(paths[0]) ? paths[0] : paths;
  const propertyTrees = map(pathsArray, path => getPropertyTree(`${path}`));

  forEach(propertyTrees, (propertyTree) => {
    let source = object;
    let target = result;

    if (!hasValueAt(source, propertyTree)) return;

    for (let i = 0; i < propertyTree.length - 1; i += 1) {
      const property = propertyTree[i];
      const value = source[property];

      if (Array.isArray(value)) {
        target[property] = target[property] || [];
      } else if (typeof value === 'object') {
        target[property] = target[property] || {};
      }

      source = value;
      target = target[property];
    }

    target[propertyTree[propertyTree.length - 1]] = deepClone(
      source[propertyTree[propertyTree.length - 1]],
    );
  });

  return result;
}

module.exports = pick;
