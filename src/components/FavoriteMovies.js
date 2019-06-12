import React, {useState} from 'react'
import FavoriteMovie from '../components/FavoriteMovie'
import AddMovie from '../components/AddMovie'
import axios from 'axios';

const getCleanUrl = movieName => {
  return `${process.env.REACT_APP_API_ENDPOINT}/movies/${encodeURIComponent(movieName)}`
}

const FavoriteMovies = ({movies: initialMovies, genres}) => {
  const [movies, setMovies] = useState(initialMovies)
  const onDelete = name => {
    axios.delete(getCleanUrl(name))
      .then(_ => {
        setMovies(movies
          .filter(m => m.name !== name))
        console.log('Deleted: ', name)
      })
      .catch(error => console.log(error))
  }

  const onAdd = movie => {
    setMovies([...movies, movie])
  }

  const onUpdate = (movie, oldName) => {
    axios.put(getCleanUrl(oldName), movie)
      .then(_ => {
        movies.forEach(m => m.name === oldName ? movie : m)
        setMovies(movies)
        console.log('Updated: ', movie.name)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
    <div className='FavoriteMovies'>
      Favorite Movies:
      {movies.map(movie =>
        <FavoriteMovie
          key={movie.name}
          initialMovie={movie}
          genres={genres}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
    </div>
    <AddMovie onAdd={onAdd} genres={genres}/>
    </>
  )
}

export default FavoriteMovies
