var React = require('react');
var Movie = React.createClass({
render: function(){
  return(
      <div className='movie'>
        <h4 className='movie-name'>
          {this.props.name}
        </h4>
        <p>{this.props.children}</p>
      </div>
    )
}

});



module.exports = Movie;