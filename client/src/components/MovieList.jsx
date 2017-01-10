var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  render:function (){

    var movies = this.props.data.map(function(movie){
      return( <Movie name={movie.name} key={movie.id}></Movie> )
      });

    // Displaying the contents of the Array 
    return ( <div className='movie-list'> {movies} </div> )
  }
});

module.exports = MovieList;