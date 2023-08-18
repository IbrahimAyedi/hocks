import React from 'react'
import StarRating from './StarRating'



const MovieCard = ({ movie,functionDelete,handleEdit }) => {
    return (
        <div className='movie-card'>
            <h3>{movie.name}</h3>
            <img src={movie.image} alt={movie.name} />
            <StarRating rating={movie.rating} />      
              <p>{movie.date}</p>
              <div>
                <button className='btn' onClick={()=>functionDelete(movie.id)} >Delete</button>
                {/* <Editmovie  film={movie}  handleEdit={handleEdit}/> */}
              </div>
        </div>
    )
}

export default MovieCard