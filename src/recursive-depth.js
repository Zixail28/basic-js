const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  let depth = 0;
  if (Array.isArray(arr)) {
  depth++;
  let maxDepth = depth;
  arr.forEach(item => {
  const itemDepth = this.calculateDepth(item);
  if (itemDepth + depth > maxDepth) {
  maxDepth = itemDepth + depth;
  }
  });
  depth = maxDepth;
  }
  return depth;
  }
  }

module.exports = {
  DepthCalculator
};
