import React, {useState} from 'react'
import axios from 'axios';

const initialMovie = {name: '', genre: '', rating: ''}

const AddMovie = ({onAdd, genres}) => {
  const [movie, setMovie] = useState(initialMovie)
  const addMovie = () => {
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/movies`, movie)
      .then(_ => {
        onAdd(movie)
        setMovie({
          ...movie,
          name: '',
          genre: '',
          rating: ''
        })
      })
      .catch(error => console.log(error))
  }
  return (
    <div className='AddMovie'>
      Add Movie:
      <form
        onSubmit={event => {
          event.preventDefault()
          addMovie()
        }}
      >
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
          })}
        >
          <option default>Genre</option>
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
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddMovie
