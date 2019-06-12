import React, {useState} from 'react'

const FavoriteMovie = ({initialMovie, genres, onDelete, onUpdate}) => {
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
        onChange={event => {
          const updatedMovie = {
            ...movie,
            name: event.target.value
          }
          setMovie(updatedMovie)
          onUpdate(updatedMovie, movie.name)
        }}
      />
      <select
        value={movie.genre}
        onChange={event => {
          const updatedMovie = {
            ...movie,
            genre: event.target.value
          }
          setMovie(updatedMovie)
          onUpdate(updatedMovie, movie.name)
        }}
        >
        {genres.map(genre =>
          <option key={genre} value={genre}>{genre}</option>)
        }
      </select>
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
          onUpdate(updatedMovie, movie.name)
        }}
      />
      <button type='submit' value='Delete'>Delete</button>
    </form>
  )
}

export default FavoriteMovie
