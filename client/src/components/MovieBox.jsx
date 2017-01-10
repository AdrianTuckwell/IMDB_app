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

  getShowTimes: function(){
    console.log("button pressed");
  },

  render:function (){
    return (
      <div className='movie-box'>
        <h2> UK Opening Week </h2>
        <MovieList data={this.state.data}/>
        <a href="url" className="tab">see more opening this week</a>
        <br/>
        <br/>
        <button onClick={this.getShowTimes} className="tab">Get Show Times</button>
      </div>
      )
  },

});

module.exports = MovieBox;
