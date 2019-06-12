import React, {useState} from 'react'
import { apiAddMovie } from '../effects/useApi';

const AddMovie = ({onAdd}) => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')
  const addMovie = () => {
    const movie = {name: name, genre: genre, rating: rating}
    const [response, isError] = apiAddMovie(movie)
    if (!isError) {
      onAdd(movie)
      setName('')
      setGenre('')
      setRating('')
    } else {
      console.log(response);
    }
  }
  return (
    <div className='AddMovie'>
      Add Movie:
      <form
        onSubmit={event => {
          console.log('SUBMIT')
          addMovie()
          event.preventDefault()
        }}
      >
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
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddMovie
