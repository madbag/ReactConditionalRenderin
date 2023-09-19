import { useState } from "react";
import moviesData from '../movie-data.json'
// import MovieCard from "./MovieCard";
import React from "react";
import ImprovedMovieCard from "./ImprovedMovieCard";

function ImprovedMovieList(){
    //taking the movies data
    const [movies, setMovies] = useState(moviesData);
    //for the toggle
    const [showMovies, setShowMovies] = useState(false);
    
    const deleteMovie = movieId =>{
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId;
        });
        setMovies(filteredMovies);
    };

    const toggleShowMovies = () => {
        setShowMovies(!showMovies)
    };
    
    return (
    <div>
        <h2>Improved Movie List</h2>
            <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

            {showMovies && 
            movies.map(movie => {
                return (
                    <ImprovedMovieCard 
                    key= {movie._id} 
                    movie={movie} 
                    clickToDelete={deleteMovie}/>
                )
                // <MovieCard key = {movie.id} movie={movie} clickToDelete={deleteMovie}/>
            })}
        </div>
    )
}

export default ImprovedMovieList;