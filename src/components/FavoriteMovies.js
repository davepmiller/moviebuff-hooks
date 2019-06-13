import React, {useState} from 'react'
import FavoriteMovie from '../components/FavoriteMovie'
import AddMovie from '../components/AddMovie'
import * as http from '../httpClient'

const FavoriteMovies = ({movies: initialMovies, genres}) => {
  const [movies, setMovies] = useState(initialMovies)
  const onDelete = name => {
    http.deleteMovie(name, movies, setMovies)
  }

  const onAdd = movie => {
    http.createMovie(movie, movies, setMovies)
  }

  const onUpdate = (movie, oldName) => {
    http.updateMovie(oldName, movie, movies, setMovies)
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
    <AddMovie genres={genres} onAdd={onAdd}/>
    </>
  )
}

export default FavoriteMovies
