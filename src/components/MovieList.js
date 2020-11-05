import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import Movie from './Movie'

function MovieList() {
  const { movies, loading } = useMovieContext()
  console.log(movies)

  return (
    <div>
      { typeof movies.results !== "undefined" && movies.results.map(movie => {
        return <Movie key={movie.id} movie={movie}/>
      })}
    </div>
  )
}

export default MovieList
