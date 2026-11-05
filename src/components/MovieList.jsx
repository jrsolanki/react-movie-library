// ============================================================
// MovieList — renders a grid of MovieCard components.
// It receives the (already filtered) list plus the watchlist
// state and the toggle handler as props, and maps over the
// list to create one MovieCard per movie.
// ============================================================

import MovieCard from "./MovieCard";

export default function MovieList({ movies, favourites, onToggleFavourite }) {
  if (movies.length === 0) {
    return (
      <p className="empty-state">
        No movies match your search. Try a different title or genre.
      </p>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavourite={favourites.includes(movie.id)}
          onToggle={() => onToggleFavourite(movie.id)}
        />
      ))}
    </div>
  );
}
