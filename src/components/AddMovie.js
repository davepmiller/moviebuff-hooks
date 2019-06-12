import React, {useState} from 'react'

const AddMovie = ({onAdd}) => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')

  return (
    <div className='AddMovie'>
      Add Movie:
      <form
        onSubmit={event => {
          onAdd({name: name, genre: genre, rating: rating})
          setName('')
          setGenre('')
          setRating('')
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
