/** 
var util = require('handlebars-utils');
var utils = require('./utils');


module.exports = function(array, options) {
    var data = utils.createFrame(options, options.hash);
    var len = array.length;
    var buffer = '';
    var i = -1;
  
    while (++i < len) {
      var item = array[i];
      data.index = i;
      item.index = i + 1;
      item.total = len;
      item.isFirst = i === 0;
      item.isLast = i === (len - 1);
      buffer += options.fn(item, {data: data});
    }
    return buffer;
  };
*/
