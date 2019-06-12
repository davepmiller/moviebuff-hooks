import React, {useState} from 'react'
import FavoriteMovie from '../components/FavoriteMovie'
import AddMovie from '../components/AddMovie'
import axios from 'axios';

const FavoriteMovies = ({movies: initialMovies, genres}) => {
  const [movies, setMovies] = useState(initialMovies)
  const onDelete = name => {
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/movies/${name}`)
      .then(_ => {
        setMovies(movies
          .filter(m => m.name !== name))
      })
      .catch(error => console.log(error))
  }

  const onAdd = movie => {
    setMovies([...movies, movie])
  }

  return (
    <>
    <div className='FavoriteMovies'>
      Favorite Movies:
      {movies.map(movie =>
        <FavoriteMovie
          key={movie.name}
          initialMovie={movie}
          onDelete={onDelete}
          genres={genres}
        />
      )}
    </div>
    <AddMovie onAdd={onAdd} genres={genres}/>
    </>
  )
}

export default FavoriteMovies
