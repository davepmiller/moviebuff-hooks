import React, {useState, useEffect} from 'react';
import FavoriteMovies from './components/FavoriteMovies'
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/movies`)
    .then(response => {
      setMovies(response.data)
      setIsLoading(false)
    })
    .then(() => {
      axios.get(`${process.env.REACT_APP_API_ENDPOINT}/movie-genres`)
        .then(response => {
          setGenres(response.data)
          setIsLoading(false)
        })
        .catch(error => {
          setIsError(true)
          console.log('Error fetching genres: ', error)
        })
    })
    .catch(error => {
      setIsError(true)
      console.log('Error fetching movies: ', error)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching data...</p>
  return (
    <div className="App">
      <FavoriteMovies movies={movies} genres={genres}/>
    </div>
  )
}

export default App;
