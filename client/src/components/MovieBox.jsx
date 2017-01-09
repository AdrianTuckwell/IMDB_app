var React = require('react');
var MovieList = require('./MovieList.jsx');

var sampleData = [
  {id:1, name: 'Sausage Party'},
  {id:2, name: 'Cafe Society'},
  {id:3, name: 'Morgan'},
  {id:4, name: 'The 9th life of Louis Drax'},
  {id:5, name: 'Naam Hai Akira'},
  {id:6, name: 'Equity'},
  {id:7, name: 'Things to come'}
];

var MovieBox = React.createClass({
  getInitialState: function(){
    return {data:sampleData}
  },

  render:function (){
    return (
      <div className='movie-box'>
        <h2> UK Opening Week </h2>
        <MovieList data={this.state.data}/>
      </div>
      )
  },

});

module.exports = MovieBox;