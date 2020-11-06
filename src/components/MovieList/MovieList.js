import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { Pagination } from "@material-ui/lab"
import { useMovieContext } from '../../context/MovieContext'
import Movie from '../Movie/Movie'
import { useStyles } from './styles'
import SearchBar from '../Search/SearchBar'

function MovieList() {
  const { movies, handlePageChange, currentPage, totalPages } = useMovieContext()
  const classes = useStyles()
  console.log(totalPages)

  return (
    <>
      <SearchBar />
      <Grid className={ classes.root } container justify="center" alignItems="center" spacing={3}>
        { typeof movies.results !== "undefined" && movies.results.map(movie => {
          return <Grid xs={12} md={3} key={movie.id} item>
                  <Movie movie={movie}/>
                </Grid>
        })}
        { !totalPages ? <CircularProgress className={classes.loader} color="secondary" size={90}/> : <Pagination size="large" className={classes.pagination} color="primary" onChange={handlePageChange} page={currentPage} count={totalPages} hideNextButton={currentPage === totalPages} hidePrevButton={ currentPage === 1 }/>}
      </Grid>
    </>
  )
}

export default MovieList
