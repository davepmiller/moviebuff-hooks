import React, {useState} from 'react'
import NameField from './NameField'
import GenreSelect from './GenreSelect'
import RatingField from './RatingField'

const FavoriteMovie = ({initialMovie, genres, onDelete, onUpdate}) => {
  const [movie, setMovie] = useState(initialMovie)

  return (
    <form onSubmit={event => {
      event.preventDefault()
      onDelete(movie.name)
    }}>
      <NameField
        movie={movie}
        onUpdate={onUpdate}
        setMovie={setMovie}
      />
      <GenreSelect
        movie={movie}
        genres={genres}
        onUpdate={onUpdate}
        setMovie={setMovie}
      />
      <RatingField
        movie={movie}
        onUpdate={onUpdate}
        setMovie={setMovie}
      />
      <button>Delete</button>
    </form>
  )
}

export default FavoriteMovie
