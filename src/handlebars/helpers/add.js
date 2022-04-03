var isNumber = require('is-number');  //看看最上方 有沒有要引入的
//                                    //否則 isNumber undefined

module.exports = function(a, b) {
    if (isNumber(a) && isNumber(b)) {     
    //if (a && b) {
      return Number(a) + Number(b);
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return a + b;
    }
    return '';
  };




