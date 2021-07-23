import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css"

function MovieList ({moviesData, searchInput, rateInput }) {
    return (
        <div className="MovieList">
            <h1> vous trouverez la liste des films</h1>
            {moviesData
            .filter(movie=> movie.title.toLowerCase().includes(searchInput.toLowerCase().trim()) && movie.Rating >= rateInput)
            .map((movie, index) => < MovieCard movie={movie} key={movie.id} />)}
        </div>
    )
}

export default MovieList
