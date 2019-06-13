import React from 'react';
import FavoriteMovies from './components/FavoriteMovies'
import {useInitData} from './httpClient'

const App = () => {
  const [isLoading, isError, movies, genres] = useInitData();
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching data...</p>
  return (
    <div className="App">
      <FavoriteMovies movies={movies} genres={genres}/>
    </div>
  )
}

export default App;
