var dispatcher = require('./dispatcher')
var constants = require('./constants')

var actions = {
  addItem: function (item) {
    dispatcher.handleViewAction({
      actionType: constants.ADD_ITEM,
      item: item
    })
  }
}

module.exports = actions
