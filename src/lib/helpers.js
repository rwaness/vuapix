export function formatHelpersArgs(namespace, args) {
  let firstArg = args.shift();
  if (typeof firstArg === 'string') {
    firstArg = `${namespace}/${firstArg}`;
  } else if (Array.isArray(firstArg)) {
    firstArg = firstArg.map((entry) => `${namespace}/${entry}`);
  } else if (typeof firstArg === 'object') {
    firstArg = Object.keys(firstArg).reduce((acc, computed) => ({
      ...acc,
      [computed]: `${namespace}/${firstArg[computed]}`,
    }), {});
  }
  return [firstArg, ...args];
}
