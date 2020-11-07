import React from 'react'
import MovieDetails from './components/MovieDetails/MovieDetails'
import MovieList from './components/MovieList/MovieList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList}/>
          <Route path="/:id" component={MovieDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
