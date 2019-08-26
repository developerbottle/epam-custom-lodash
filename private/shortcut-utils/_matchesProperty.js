const getPropertyTree = require('../object-utils/_getPropertyTree');
const getValueAt = require('../object-utils/_getValueAt');
const deepEquals = require('../object-utils/_deepEquals');

function matchesProperty(path, srcValue) {
  const propertyTree = getPropertyTree(path);

  return value => deepEquals(getValueAt(value, propertyTree), srcValue);
}

module.exports = matchesProperty;
