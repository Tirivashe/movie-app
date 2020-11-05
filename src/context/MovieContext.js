import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export function useMovieContext(){
  return useContext(MovieContext)
}

export function MovieProvider({ children }) {

  const [movies, setMovies] = useState({})
  const [param, setParam] = useState('popular')

  const getParameter = input => {
    setParam(input)
  }

  
  const fetchMovies = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
  },[param])  

  return (
    <MovieContext.Provider value={{movies, getParameter}}>
      { children }
    </MovieContext.Provider>
  )
}

