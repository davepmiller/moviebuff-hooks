import React from 'react'

const GenreSelect = ({movie, genres, onUpdate, setMovie}) => {
  const onChange = event => {
    const updatedMovie = {
      ...movie,
      genre: event.target.value
    }
    setMovie(updatedMovie)
    if (onUpdate) {
      onUpdate(updatedMovie, movie.name)
    }
  }

  return (
    <select
      value={movie.genre}
      onChange={onChange}
    >
      <option default>Genre</option>
      {
        genres.map(genre =>
          <option key={genre} value={genre}>{genre}</option>)
      }
    </select>
  )
}

export default GenreSelect
