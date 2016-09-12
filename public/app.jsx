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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name= this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length && message.length > 0) {
      this.refs.name.value = '';
      this.refs.message.value = '';

      this.props.onNewName(name);
      this.props.onNewMessage(message);
    }

  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <textarea ref="message"/>
        <button>Set Name</button>
      </form>
    )
  }
});

var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  handleNewName(name){
    this.setState({
      name: name

    });
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <GreeterMessage
          name={name}
          message={message}
          />
        <GreeterForm onNewName={this.handleNewName}
                    onNewMessage={this.handleNewMessage}/>

      </div>
    );
  }
});



ReactDOM.render(
  <Greeter firstName={name} />,
  document.getElementById('app')
);
