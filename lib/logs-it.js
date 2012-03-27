/*
Logs-It by Fadrizul H.
*/
var LogsIt, ansiCodes, util;

util = require("util");

ansiCodes = require("./ansi-codes");

LogsIt = (function() {

  function LogsIt() {}

  LogsIt.prototype.inspect = function(input) {
    var nodeId;
    nodeId = process.pid;
    return console.log(this.colourIt("NodeId: " + nodeId + " - " + input, ansiCodes.cyan));
  };

  LogsIt.prototype.colourIt = function(str, code) {
    return "\033[" + code + "m " + str;
  };

  return LogsIt;

})();

module.exports = LogsIt;
