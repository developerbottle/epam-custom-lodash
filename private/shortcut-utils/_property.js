const getPropertyTree = require('../object-utils/_getPropertyTree');
const getValueAt = require('../object-utils/_getValueAt');

function property(path) {
  const propertyTree = getPropertyTree(path);

  return value => getValueAt(value, propertyTree);
}

module.exports = property;
