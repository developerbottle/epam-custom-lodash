function deleteProperty(object, propertyTree) {
  let nextDestination = object;
  for (let i = 0; i < propertyTree.length - 1; i += 1) {
    const nextProperty = propertyTree[i];
    nextDestination = nextDestination[nextProperty];
  }

  delete nextDestination[propertyTree[propertyTree.length - 1]];
}

module.exports = deleteProperty;
