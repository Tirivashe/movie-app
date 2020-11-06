import React from 'react'
import { Grid } from '@material-ui/core'
import { Pagination } from "@material-ui/lab"
import { useMovieContext } from '../../context/MovieContext'
import Movie from '../Movie/Movie'
import { useStyles } from './styles'

function MovieList() {
  const { movies, handlePageChange, currentPage, totalPages } = useMovieContext()
  const classes = useStyles()
  console.log(totalPages)

  return (
    <Grid className={ classes.root } container alignItems="center" spacing={4}>
      { typeof movies.results !== "undefined" && movies.results.map(movie => {
        return <Grid xs={12} md={4} key={movie.id} item>
                <Movie movie={movie}/>
              </Grid>
      })}
      { totalPages && <Pagination onChange={handlePageChange} page={currentPage} count={totalPages} hideNextButton={currentPage === totalPages} hidePrevButton={ currentPage === 1 }/>}
    </Grid>
  )
}

export default MovieList
