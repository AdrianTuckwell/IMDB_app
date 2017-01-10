var React = require('react');
var Movie = React.createClass({

render: function(){
    return(
      <div className='movie'>
        <a className='movie-name'> {this.props.name} </a>
        <p>{this.props.children}</p>
      </div>
    )
  }

});

module.exports = Movie;