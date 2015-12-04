window.App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
    );
  }
});
