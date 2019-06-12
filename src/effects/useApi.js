import {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8080/api';

export const useApiGetMovies = (initialState) => {
  const url = `${endpoint}/movies`
  return useApiGet(url, initialState)
}

export const useApiGetGenres = (initialState) => {
  const url = `${endpoint}/movie-genres`
  return useApiGet(url, initialState)
}

export const apiAddMovie = async (movie) => {
  const url = `${endpoint}/movies`
  let response = {}
  let isError = false
  try {
    response = await axios.post(url, movie)
    console.log(response)
  } catch (error) {
    response = error
    isError = true
    console.log(error)
  }

  return [response, isError]
}

export const apiDeleteMovie = async (name) => {
  const url = `${endpoint}/movies/${name}`
  let response = {}
  let isError = false
  try {
    response = await axios.delete(url)
    console.log(response)
  } catch (error) {
    response = error
    isError = true
    console.log(error)
  }

  return [response, isError]
}

const useApiGet = (url, initialState) => {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async() => {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await axios.get(url)
        setData(response.data.sort(sortMovieArray))
      } catch (error) {
        setIsError(true)
        console.log(error)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return [data, isLoading, isError]
}

export const sortMovieArray = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }

  return a.name < b.name ? -1 : 1;
}
