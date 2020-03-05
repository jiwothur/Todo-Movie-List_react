import React from 'react';

function Movie(props){
    return(
        <div className="movie">
        <h3 className="movie_title">{props.title}</h3>
    </div>
    )
}

export default Movie;
