###
Logs-It by Fadrizul H.
###


# Load dependencies
# ------------------------------------------------------------------------------
util      = require "util"
ansiCodes = require "./ansi-codes"

class LogsIt

  inspect : (input) ->
    nodeId = process.pid
    console.log @colourIt "NodeId: #{ nodeId } - #{ input }", ansiCodes.cyan

  colourIt : (str, code) ->
    return "\033[#{ code }m #{ str }"


module.exports = LogsIt