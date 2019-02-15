import React from 'react';
const moment = require('moment');


const MovieDetailsCredits = (props) => (
  <div className="main">
    <h1>Movie Details & Credits</h1>
      <img src={props.movie[0].url} div className="movie-image" />
      <img src={props.movie[0].rating_url} div className="rating-block" />
      <div className="prod-release">{props.movie[0].production} | Release Date: {moment(props.movie[0].release_date).format('MMMM Do YYYY')}</div>
      <div className="starring">
        <h3>Starring: </h3>
          <span>{props.movie[0].starring}</span>
      </div>
      <div className="summary">
        <h3>Summary: </h3>
          <span>{props.movie[0].summary}</span>
      </div>
      <div className="director">
        <h3>Director: </h3>
          <div>{props.movie[0].director}</div>
      </div>
      <div className="genre">
        <h3>Genre(s): </h3>
          <div>{props.movie[0].genre}</div>
      </div>
      <div className="rating">
        <h3>Rating: </h3>
          <div>{props.movie[0].rating}</div>
      </div>
      <div className="runtime">
        <h3>Runtime: </h3>
          <div>{props.movie[0].runtime}</div>
      </div>
      <div className="footer">See All Details and Credits</div>
  </div>
);

export default MovieDetailsCredits;


// <div className="create-editor">
//       <h2>AUTHOR</h2>
//       <form >
//         <input className="create-input" id="title" type="text"  placeholder="Post Title"></input>
//         <input className="create-input" id="author" type="text"  placeholder="Author"></input>
//         <input className="create-input" id="Url" type="text"  placeholder="Image URL"></input>
//         <textarea className="create-body-textarea" id="postBody" placeholder="Post Body"></textarea>
//         <button className="create-submit-button" onClick= {props.onClick.bind(this, event)} type="button"
//         >Save post</button>
//       </form>
//     </div>
//     <div className="create-preview">
//       <h2>PREVIEW</h2>
//       // you'll use your framework of choice to implement live preview here -->
//     </div>


