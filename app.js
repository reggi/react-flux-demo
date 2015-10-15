var React = require('react')
var actions = require('./actions')
var store = require('./store')

var App = React.createClass({
  handleChange: function () {
    actions.addItem('string of data')
  },
  render: function () {
    return (
      <div>
        <p>Enter some text to fire the 'onChange' event.</p>
        <input type='text' onChange={this.handleChange}/>
      </div>
    )
  }
})

module.exports = App
