import React, {useState} from 'react'
import FavoriteMovie from '../components/FavoriteMovie'
import AddMovie from '../components/AddMovie'
import {sortMovieArray, apiDeleteMovie} from '../effects/useApi'

const FavoriteMovies = ({props}) => {
  const [movies, setMovies] = useState(props)
  const onDelete = name => {
    const [response, isError] = apiDeleteMovie(name)
    if (isError) {
      console.log(response)
    } else {
      setMovies(movies
        .filter(m => m.name !== name)
        .sort(sortMovieArray))
    }
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
          movie={movie}
          onDelete={onDelete}
        />
      )}
    </div>
    <AddMovie onAdd={onAdd}/>
    </>
  )
}

export default FavoriteMovies
