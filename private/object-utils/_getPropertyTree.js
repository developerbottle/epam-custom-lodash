function getPropertyTree(path) {
  const newPath = path.replace(/\[.+]/g, (substring) => {
    const firstQuoteChar = substring.charAt(1);
    const lastQuoteChar = substring.charAt(substring.length - 2);

    if (firstQuoteChar === lastQuoteChar && (firstQuoteChar === '"' || firstQuoteChar === '\'')) {
      return `.${substring.slice(2, -2)}`;
    }

    return `.${substring.slice(1, -1)}`;
  });

  if (newPath.startsWith('.')) return newPath.slice(1).split('.');
  return newPath.split('.');
}

module.exports = getPropertyTree;
