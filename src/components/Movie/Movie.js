import React from 'react'
import { Card, CardContent, CardActionArea, Typography, CardMedia } from '@material-ui/core'
import { useStyles } from './styles'

function Movie({ movie }) {

  const modifiedMovie = { ...movie, image: `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path: movie.backdrop_path}` }
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={modifiedMovie.image} alt="poster"/>
        <CardContent>
          <Typography>{modifiedMovie.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Movie
