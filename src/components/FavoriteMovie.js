import React, {useState} from 'react'

const FavoriteMovie = ({initialMovie, onDelete, genres}) => {
  const [movie, setMovie] = useState(initialMovie)
  return (
    <form onSubmit={event => {
      event.preventDefault()
      onDelete(movie.name)
    }}>
      <input
        type='text'
        value={movie.name}
        placeholder='Name'
        onChange={event => setMovie({
          ...movie,
          name: event.target.value
        })}
      />
      <select
        value={movie.genre}
        onChange={event => setMovie({
          ...movie,
          genre: event.target.value
        })}      >
        {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>
      <input
        type='text'
        value={movie.rating}
        placeholder='Rating'
        onChange={event => setMovie({
          ...movie,
          rating: event.target.value
        })}
      />
      <button type='submit' value='Delete'>Delete</button>
    </form>
  )
}

export default FavoriteMovie
