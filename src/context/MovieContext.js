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
  const [query, setQuery] = useState('')

  const getMovies = input => {
    setParam(input)
  }
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const searchMovies = e => {
    setQuery(e.target.value)
  }
  
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

  const fetchSearchedMovies = async url => {
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

  useEffect(() => {
    fetchSearchedMovies(query !== '' && `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}&page=${currentPage}`)
  },[query, currentPage])

  return (
    <MovieContext.Provider value={{movies, getMovies, handlePageChange, query, searchMovies, currentPage, totalPages}}>
      { children }
    </MovieContext.Provider>
  )
}

