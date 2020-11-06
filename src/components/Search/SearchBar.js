import React from 'react'
import { TextField } from '@material-ui/core'
import { useStyles } from './styles'
import { useMovieContext } from '../../context/MovieContext'

function SearchBar() {
  const classes = useStyles()
  const { query, searchMovies } = useMovieContext()
  console.log(query)

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField onChange={searchMovies} value={query} className={classes.textField} id="outlined-basic" label="Search" fullWidth variant="outlined" />
    </form>
  )
}

export default SearchBar
