import React from 'react';
import $ from 'jquery';




class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      movieDetails:[]
    }

   this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount(){
    this.getMovieDetails();
  }

  getMovieDetails() {
    $.ajax({
      url: 'http://localhost:3002/api/movies/details',
      method: 'GET',
      context: this,
      success: function(results) {
        this.setState({
          movieDetails: results
        });
        console.log(results, 'GET req from client success')
      },
      error: function (results) {
        console.log('error in GET req from client');
      }
    })
  }



render() {
    return (
      <h1>Movie Details Widget!</h1>
    );
  }
}
export default App;