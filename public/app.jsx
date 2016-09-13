var React = require('react');
var ReactDOM = require('react-dom');

// must require 'Greeter' compenent here because this is where it is called
var Greeter = require('Greeter');

var name = 'Chase'

ReactDOM.render(
  <Greeter name={name} />,
  document.getElementById('app')
);
