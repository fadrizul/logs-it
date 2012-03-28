/*
Logs-It
Copyright (C) 2012 Fadrizul H. <fadrizul@gmail.com>
MIT Licensed
*/
var LogsIt, colour, util;

util = require("util");

colour = require("./ansi-codes");

LogsIt = (function() {

  function LogsIt() {}

  LogsIt.prototype.it = function(input) {
    var json;
    if (this.isItSerialised === true) {
      return util.log(this.inspect(input));
    } else {
      json = JSON.stringify(input);
      return util.log(this.inspect(json));
    }
  };

  LogsIt.prototype.inspect = function(input) {
    var nodeId;
    nodeId = process.pid;
    return this.colourIt("NodeId: " + nodeId + " - " + (this.colourIt(input, colour.red)), colour.blue);
  };

  LogsIt.prototype.colourIt = function(str, code) {
    return "\033[" + code + "m " + str;
  };

  LogsIt.prototype.isItSerialised = function(input) {
    var isBoolean, isNull, isNumber, isString;
    isString = typeof input === "string";
    isBoolean = typeof input === "boolean";
    isNumber = typeof input === "number";
    isNull = typeof input === null;
    if (isString || isBoolean || isNumber || isNull) return true;
    return false;
  };

  return LogsIt;

})();

module.exports = LogsIt;
