import React from 'react'
import { useStyles } from './styles'
import { useMovieContext } from '../../context/MovieContext'
import { AppBar, Toolbar, Button } from '@material-ui/core'

function Header() {
  const { getMovies } = useMovieContext()
  const classes = useStyles()
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <div className={classes.headerContainer}>
          <div className={classes.headerTitle}>Movie App</div>
          <div className={classes.link_container}>
            <Button onClick={()=> getMovies("popular")} className={classes.link}>Popular</Button>
            <Button onClick={()=> getMovies("top_rated")} className={classes.link}>Top Rated</Button>
            <Button onClick={()=> getMovies("upcoming")} className={classes.link}>Upcoming</Button>
            <Button onClick={()=> getMovies("now_playing")} className={classes.link}>Now Playing</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
