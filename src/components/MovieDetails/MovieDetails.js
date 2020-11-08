import { Button, Chip, Grid, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useStyles } from './styles'

function MovieDetails() {
  const [movie, setMovie] = useState({})
  const { id } = useParams()
  const classes = useStyles()

  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path: movie.backdrop_path}`

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
    <Grid container alignItems="center" justify="center" spacing={3} className={classes.root}>
      <Typography className={classes.title} variant="h2">{movie.title}</Typography>
      <Grid className={classes.content} container direction="row" justify="space-between">
        <Grid item xs={12} md={6}>
          <img className={classes.image} src={image} alt="poster"/>
        </Grid>
        <Grid className={classes.textContent} item container direction="column" xs={12} md={6} spacing={6}>
          <Grid item component={Typography} variant="h4">
            Release Date
            <Typography>{movie.release_date}</Typography>
          </Grid>
          <Grid item component={Typography} variant="h4">
            Runtime
            <Typography>{movie.runtime} mins</Typography>
          </Grid>
          <Grid item component={Typography} variant="h4">
            Genres
            <Grid item container alignItems="center">
              {typeof movie.genres !== "undefined" && movie.genres.map(genre => (
                <Chip label={genre.name} color="primary"/>
              ))}
            </Grid>
          </Grid>
          <Grid item component={Typography} variant="h4">
            Overview
            <Typography className={classes.overview}>{movie.overview}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Link className={classes.buttonLink} to="/">
        <Button className={classes.button}>Back To Home</Button>
      </Link>
    </Grid>
  )
}

export default MovieDetails 
