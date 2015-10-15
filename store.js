var dispatcher = require('./dispatcher')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var constants = require('./constants')

var store = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(constants.CHANGE_EVENT)
  }
})

dispatcher.register(function (payload) {
  console.log(payload)
  return true
})

module.exports = store
