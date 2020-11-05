import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MovieProvider } from './context/MovieContext'

ReactDOM.render(
  <MovieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MovieProvider>,
  document.getElementById('root')
);
