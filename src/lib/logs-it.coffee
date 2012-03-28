###
Logs-It
Copyright (C) 2012 Fadrizul H. <fadrizul@gmail.com>
MIT Licensed
###


# Load dependencies
# ------------------------------------------------------------------------------
util   = require "util"
colour = require "./ansi-codes"

class LogsIt

  it : (input) ->

    if @isItSerialised is true
      util.log @inspect input
    else
      json = JSON.stringify input
      util.log @inspect json

  inspect : (input) ->
    nodeId = process.pid
    @colourIt "NodeId: #{ nodeId } - #{ @colourIt input, colour.red }", colour.blue

  colourIt : (str, code) ->
    return "\033[#{ code }m #{ str }"

  isItSerialised : (input) ->

    isString  = typeof input is "string"
    isBoolean = typeof input is "boolean"
    isNumber  = typeof input is "number"
    isNull    = typeof input is null

    return true if isString or isBoolean or isNumber or isNull
    return false


module.exports = LogsIt