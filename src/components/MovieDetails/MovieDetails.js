import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStyles } from './styles'

function MovieDetails() {
  const [movie, setMovie] = useState({})
  const { id } = useParams()
  const classes = useStyles()

  console.log(movie)

  const fetchSingleMovie = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovie(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
  },[id])

  return (
    <div className={classes.root}>
      Selected: {movie.title}
    </div>
  )
}

export default MovieDetails
