###
MyTeksi - CoffeeScript CakeFile
###

# Load dependencies
# ==============================================================================
{ spawn, exec } = require "child_process"
fs              = require "fs"
util            = require "util"

# Define directory path --------------------------------------------------------
lessdir = "src/public/stylesheets"
cssdir  = "public/stylesheets"

# Functions for displaying the messages in terminal
# ==============================================================================
printData = (process) ->

  process.stdout.on 'data', (data) -> util.print data
  process.stderr.on 'data', (data) -> util.print data


# Task for cake watch
# ==============================================================================
task 'watch', 'watch all coffeescript files for changes', ->

  # Options for bin/coffee (compile, watch, bare) look for files in src
  coffee  = spawn("coffee", ["-o", "./", "-cwb", "src/"])

  # Calls printData function
  printData(coffee)
