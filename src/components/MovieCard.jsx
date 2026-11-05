// ============================================================
// MovieCard — a presentational component.
// It receives everything it needs through PROPS:
//   movie       — one movie object from movies.js
//   isFavourite — true if this movie is in the watchlist
//   onToggle    — a function to call when the button is clicked
// The card itself holds no state; App owns the state and
// passes it down. That is the classic props pattern.
// ============================================================

export default function MovieCard({ movie, isFavourite, onToggle }) {
  return (
    <article className="card">
      <div className="card-media" style={{ background: movie.gradient }}>
        <span className="card-emoji">{movie.emoji}</span>
        <span className="card-year">{movie.year}</span>
      </div>
      <div className="card-body">
        <div className="card-row">
          <h3 className="card-title">{movie.title}</h3>
          <span className="rating">★ {movie.rating}</span>
        </div>
        <p className="card-genre">{movie.genre}</p>
        <p className="card-text">{movie.description}</p>
        <button
          type="button"
          className={isFavourite ? "btn btn-fav is-fav" : "btn btn-fav"}
          onClick={onToggle}
        >
          {isFavourite ? "♥ In Watchlist" : "♡ Add to Watchlist"}
        </button>
      </div>
    </article>
  );
}
