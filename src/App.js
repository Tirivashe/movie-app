import React from 'react'
import { Button } from '@material-ui/core'
import Header from './components/Header'
import { useMovieContext} from './context/MovieContext'

function App() {

  const {  movies, getParameter } = useMovieContext()
  console.log(movies)

  return (
    <div className="App">
      <Header />
      <Button onClick={() => getParameter('now_playing')}>Get Now Playing Movies</Button>
      <Button onClick={() => getParameter('top_rated')}>Get Top Rated Movies</Button>
      <Button onClick={() => getParameter('upcoming')}>Get Upcoming Movies</Button>
      <Button onClick={() => getParameter('popular')}>Get Popular Movies</Button>
    </div>
  );
}

export default App;
