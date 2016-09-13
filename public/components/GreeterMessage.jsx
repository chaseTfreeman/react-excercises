// import react
var React = require('react');


// defining your react compenent and its logic
var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name
    var message = this.props.message

    return(
      <div>
        <h1>
          Hello {name}!
        </h1>
        <p>{message}</p>
      </div>
    );
  }
});

// need to export so other components can use
module.exports = GreeterMessage;
