import React from 'react'

const NameField = ({movie, onUpdate, setMovie}) => {
  const handleChange = event => {
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
  }

  return (
    <input
      type='text'
      value={movie.name}
      placeholder='Name'
      onChange={handleChange}
    />
  )
}

export default NameField
