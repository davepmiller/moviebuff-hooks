import React from 'react';
import {useApiGetMovies} from './effects/useApi'
import FavoriteMovies from './components/FavoriteMovies'

const App = () => {
  const [movies, isLoading, isError] = useApiGetMovies([])
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching data...</p>
  return (
    <div className="App">
      <FavoriteMovies props={movies}/>
    </div>
  )
}

export default App;
