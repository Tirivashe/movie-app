import React from 'react'
import { useStyles } from './styles'
import { useMovieContext } from '../../context/MovieContext'
import { AppBar, Toolbar, Button, Typography, Grid } from '@material-ui/core'

function Header() {
  const { getMovies } = useMovieContext()
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center" className={classes.headerContainer}>
          <Grid item component={Typography} className={classes.headerTitle}>Movie App</Grid>
          <Grid item container justify="space-between" alignItems="center" className={classes.link_container}>
            <Grid item component={Button} onClick={()=> getMovies("popular")} className={classes.link}>Popular</Grid>
            <Grid item component={Button} onClick={()=> getMovies("top_rated")} className={classes.link}>Top Rated</Grid>
            <Grid item component={Button} onClick={()=> getMovies("upcoming")} className={classes.link}>Upcoming</Grid>
            <Grid item component={Button} onClick={()=> getMovies("now_playing")} className={classes.link}>Now Playing</Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
