import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {data} from './data';
import MovieCard from './components/MovieCard';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='App'>
            <Navbar />
          <div className='main'>
            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favourites</div>
            </div>
            <div className='list'>
              {data.map(movie => (
                <MovieCard key={movie.Title} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App

