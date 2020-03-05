import React from 'react';
import axios from 'axios';
import Movie from "./Movie";
import "../css/Movie.css";

class MovieData extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading:true,
      movies:[],
     }
  }
  getMovies = async () =>{
    const _movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");    
    this.setState({movies:_movies.data.data.movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return( 
      <div className="movie">
        {isLoading ? 
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div> 
          :
          <div className="movie_movies">
            <h2 id="title">Movie List</h2>
              {movies.map(movie => (
              <Movie 
              key={movie.id}
              title={movie.title}
              />
              ))}
          </div>
        }
    </div>
    )
  }
}

export default MovieData;
