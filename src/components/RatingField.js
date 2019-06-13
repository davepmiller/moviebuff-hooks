import React from 'react'

const RatingField = ({movie, onUpdate, setMovie}) => {
  const onChange = event => {
    const updatedMovie = {
      ...movie,
      rating: event.target.value
    }
    setMovie(updatedMovie)
    if (onUpdate) {
      onUpdate(updatedMovie, movie.name)
    }
  }

  return (
    <input
      type='text'
      value={movie.rating}
      placeholder='Rating'
      onChange={onChange}
    />
  )
}

export default RatingField
