const { lorem } = require('../../js/utils/lorem-generator');

module.exports = function (min, max) {
  return lorem(min, max, { usePunc: false });
};