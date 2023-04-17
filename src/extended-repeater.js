const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof options !== 'object') {
    throw new Error('Invalid argument. Expected an object.');
  }

  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

  if (typeof repeatTimes !== 'number' || typeof additionRepeatTimes !== 'number') {
    throw new Error('Invalid arguments. Expected repeatTimes and additionRepeatTimes to be numbers.');
  }

  const additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const repeatedStr = new Array(repeatTimes).fill(str + additionStr).join(separator);

  return repeatedStr;
}


module.exports = {
  repeater
};
