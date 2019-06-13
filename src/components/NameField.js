import React from 'react'

const NameField = ({movie, onUpdate, setMovie}) => (
  <input
    type='text'
    value={movie.name}
    placeholder='Name'
    onChange={event => {
      event.preventDefault()
      const updatedMovie = {
        ...movie,
        name: event.target.value
      }
      setMovie(updatedMovie)
      if (onUpdate) {
        console.log(movie.name)
        onUpdate(updatedMovie, movie.name)
      }
    }}
  />
)

export default NameField
