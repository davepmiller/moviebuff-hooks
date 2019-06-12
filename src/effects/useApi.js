import {useState, useEffect} from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8080/api/';

export const useApiGetMovies = (initialState) => {
  const url = endpoint + 'movies'
  return useApi(url, initialState)
}

const useApi = (url, initialState) => {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async() => {
      setIsError(false)
      setIsLoading(true)
      try {
        const response = await axios(url)
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
