import React from 'react';



const MovieDetailsCredits = (props) => (
  <div className="main" >
    <div className="movie-title">{props.movie[0].title}</div>
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