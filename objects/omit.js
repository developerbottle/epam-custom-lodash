const forEach = require('../private/object-utils/_forEach');
const deepClone = require('../private/object-utils/_deepClone');
const getPropertyTree = require('../private/object-utils/_getPropertyTree');
const deleteProperty = require('../private/object-utils/_deleteProperty');
const hasValueAt = require('../private/object-utils/_hasValueAt');

function omit(object, ...paths) {
  const pathsArray = Array.isArray(paths[0]) ? paths[0] : paths;

  const result = { ...deepClone(object) };

  forEach(pathsArray, (path) => {
    const propertyTree = getPropertyTree(`${path}`);

    if (hasValueAt(result, propertyTree)) {
      deleteProperty(result, propertyTree);
    }
  });

  return result;
}

module.exports = omit;
