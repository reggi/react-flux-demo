var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign')
var constants = require('./constants')

var dispatcher = assign(new Dispatcher(), {
  handleViewAction: function (action) {
    this.dispatch({
      source: constants.VIEW_ACTION,
      action: action
    })
  }
})

module.exports = dispatcher
