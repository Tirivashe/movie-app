import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core'
import { useStyles } from './styles'

function Movie({ movie }) {

  const modifiedMovie = { ...movie, image: `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path: movie.backdrop_path}` }
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <img className={classes.image} src={modifiedMovie.image} alt="poster"/>
      </CardActionArea>
      <CardContent>
        <Typography>{modifiedMovie.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default Movie
