import React from 'react'

function Movie({ movie }) {
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  )
}

export default Movie
