import React, {useState} from 'react'

const FavoriteMovie = ({movie, onDelete}) => {
  const [name, setName] = useState(movie.name)
  const [genre, setGenre] = useState(movie.genre)
  const [rating, setRating] = useState(movie.rating)
  return (
    <form onSubmit={event => {
      onDelete(name)
      event.preventDefault()
    }}>
      <input 
        type='text'
        value={name}
        placeholder='Name'
        onChange={event => setName(event.target.value)}
      />
      <input
        type='text'
        value={genre}
        placeholder='Genre'
        onChange={event => setGenre(event.target.value)}
      />
      <input
        type='text'
        value={rating}
        placeholder='Rating'
        onChange={event => setRating(event.target.value)}
      />
      <button type='submit' value='Delete'>Delete</button>
    </form>
  )
}

export default FavoriteMovie
