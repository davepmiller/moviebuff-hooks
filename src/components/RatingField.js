import React from 'react'

const RatingField = ({movie, onUpdate, setMovie}) => (
  <input
    type='text'
    value={movie.rating}
    placeholder='Rating'
    onChange={event => {
      const updatedMovie = {
        ...movie,
        rating: event.target.value
      }
      setMovie(updatedMovie)
      if (onUpdate) {
        onUpdate(updatedMovie, movie.name)
      }
    }}
  />
)

export default RatingField
