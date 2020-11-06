import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export function useMovieContext(){
  return useContext(MovieContext)
}

export function MovieProvider({ children }) {

  const [movies, setMovies] = useState({})
  const [param, setParam] = useState('popular')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const getMovies = input => {
    setParam(input)
  }
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  
  const fetchMovies = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data)
      setTotalPages(data.total_pages)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${currentPage}`)
  },[param, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  },[param])

  return (
    <MovieContext.Provider value={{movies, getMovies, handlePageChange, currentPage, totalPages}}>
      { children }
    </MovieContext.Provider>
  )
}

