import React from 'react'
import { TextField } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { useStyles, theme } from './styles'
import { useMovieContext } from '../../context/MovieContext'

function SearchBar() {
  const classes = useStyles()
  const { query, searchMovies } = useMovieContext()

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField onChange={searchMovies} value={query} className={classes.textField} id="outlined-basic" label="Search" fullWidth variant="outlined" />
      </ThemeProvider>
    </form>
  )
}

export default SearchBar
