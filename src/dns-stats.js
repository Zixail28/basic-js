const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsMap = {};

  for (const domain of domains) {
    const domainParts = domain.split('.').reverse();
    let dns = '';
    for (const part of domainParts) {
      dns = `${dns}.${part}`;
      dnsMap[dns] = (dnsMap[dns] || 0) + 1;
    }
  }

  return dnsMap;
}

module.exports = {
  getDNSStats
};
