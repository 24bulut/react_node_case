import React from 'react';

function MovieCard({ Poster, Title }) {
  return (
    <div className="movie-card">
      <img 
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
        alt={Title} 
        className="movie-poster" 
      />
      <h3 className="movie-title">{Title}</h3>
    </div>
  );
}

export default MovieCard;