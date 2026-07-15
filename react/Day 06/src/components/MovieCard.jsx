import React from 'react'

export default function MovieCard({ thumbnail, title, rating }) {
  return (
    <div className="col-4">
      <div className='card movie-card'>
        <img height={300} src={thumbnail} alt="Movie Poster" />
        <div className="card-body">
          <h4 className="card-title">
            {title}
          </h4>
          <p className="rating">
            ⭐ {rating}/ 10
          </p>

        </div>
      </div>

    </div>

  )
}
