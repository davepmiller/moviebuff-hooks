import React from 'react';
import {useApiGetMovies} from './effects/useApi'
import FavoriteMovies from './components/FavoriteMovies'

const App = () => {
  const [movies, isLoading, isError] = useApiGetMovies([])
  return (
    <div className="App">
      {isError ? <p>Error fetching data...</p> : ''}
      {isLoading || movies.length === 0
        ? <p>Loading...</p>
        : <FavoriteMovies props={movies}/>
      }
    </div>
  )
}

export default App;
