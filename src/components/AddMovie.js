import React, {useState} from 'react'
import NameField from './NameField';
import GenreSelect from './GenreSelect';
import RatingField from './RatingField';

const initialMovie = {name: '', genre: '', rating: ''}

const AddMovie = ({onAdd, genres}) => {
  const [movie, setMovie] = useState(initialMovie)

  return (
    <div className='AddMovie'>
      Add Movie:
      <form
        onSubmit={event => {
          event.preventDefault()
          setMovie({
            ...movie,
            name: '',
            genre: '',
            rating: ''
          })
          onAdd(movie)
        }}
      >
        <NameField movie={movie} setMovie={setMovie}/>
        <GenreSelect movie={movie} genres={genres} setMovie={setMovie}/>
        <RatingField movie={movie} genres={genres} setMovie={setMovie}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddMovie
