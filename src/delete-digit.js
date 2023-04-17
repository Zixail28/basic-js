const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = n.toString()
  const arr = [];
  for (let i = 0; i < newN.length; i++) {
    arr.push(newN.slice(0,i) + newN.slice(i + 1))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
