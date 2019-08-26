function getValueAt(object, propertyTree) {
  let nextDestination = object;
  for (let i = 0; i < propertyTree.length; i += 1) {
    const nextProperty = propertyTree[i];

    if (nextProperty in nextDestination) {
      nextDestination = nextDestination[nextProperty];
    } else {
      return undefined;
    }
  }

  return nextDestination;
}

module.exports = getValueAt;
