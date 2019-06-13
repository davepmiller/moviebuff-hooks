import {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = process.env.REACT_APP_API_ENDPOINT

const getCleanUrl = movieName => {
  return `${endpoint}/movies/${encodeURIComponent(movieName)}`
}

export const useInitData = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    axios.get(`${endpoint}/movies`)
    .then(response => {
      setMovies(response.data)
      setIsLoading(false)
    })
    .then(() => {
      axios.get(`${endpoint}/movie-genres`)
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

  return [isLoading, isError, movies, genres]
}

export const createMovie = (newMovie, existingMovies, setMovies) => {
  axios.post(`${endpoint}/movies`, newMovie)
  .then(_ => {
    setMovies([...existingMovies, newMovie])
    console.log('Added: ', newMovie)
  })
  .catch(error => console.log(error))
}

export const updateMovie = (
  oldMovieName, updatedMovie, existingMovies, setMovies) => {
  axios.put(getCleanUrl(oldMovieName), updatedMovie)
  .then(_ => {
    const updatedMovies = existingMovies.map(
      m => m.name === oldMovieName ? updatedMovie : m
    )
    setMovies(updatedMovies)
    console.log('Updated: ', oldMovieName)
  })
  .catch(error => console.log(error))
}

export const deleteMovie = (movieName, movies, setMovies) => {
  axios.delete(getCleanUrl(movieName))
  .then(_ => {
    const updatedMovies = movies.filter(m => m.name !== movieName)
    setMovies(updatedMovies)
    console.log('Deleted: ', movieName)
  })
  .catch(error => console.log(error))
}
