import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard.js';

function MovieGrid() {
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  if (status === 'idle') {
    return <div>Film aramak için yukarıdaki arama çubuğunu kullanın.</div>;
  }

  if (status === 'loading') {
    return <div>Filmler yükleniyor...</div>;
  }

  if (status === 'failed') {
    return <div>Hata: {error}</div>;
  }

  if (movies.length === 0) {
    return <div>Film bulunamadı. Farklı bir arama terimi deneyin.</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          Poster={movie.Poster} 
          Title={movie.Title} 
        />
      ))}
    </div>
  );
}

export default MovieGrid;