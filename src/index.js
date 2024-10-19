module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;
  const brackets = Object.fromEntries(bracketsConfig);

  const stack = str.split('').reduce((acc, el) => {
    if (brackets[acc.at(-1)] === el) {
      acc.pop();
    } else if (Object.hasOwn(brackets, el)) {
      acc.push(el);
    }
    return acc;
  }, []);
  return !stack.length;
}
