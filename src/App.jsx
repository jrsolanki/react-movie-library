// ============================================================
// CineShelf — React Movie Library
// STATE lives here in App (the parent) and flows down as props:
//   searchQuery  — text typed in the search box
//   genre        — the selected genre filter
//   favourites   — array of movie ids in the watchlist
//   showFavsOnly — whether to show only the watchlist
// MovieCard and MovieList are child components that receive
// props and report clicks back up through handler functions.
// ============================================================

import { useState } from "react";
import { movies, genres } from "./movies";
import MovieList from "./components/MovieList";
import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [favourites, setFavourites] = useState([]);
  const [showFavsOnly, setShowFavsOnly] = useState(false);

  // Toggle one movie in/out of the watchlist (state update).
  function toggleFavourite(id) {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  // Apply search + genre + watchlist filters to the local data.
  const visibleMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre = genre === "All" || movie.genre === genre;
    const matchesFavs = !showFavsOnly || favourites.includes(movie.id);
    return matchesSearch && matchesGenre && matchesFavs;
  });

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#">
            Cine<span>Shelf</span>
          </a>
          <p className="header-tag">♥ {favourites.length} in your watchlist</p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Find your next favourite movie.</h1>
          <p>
            Browse 12 movies from a local data set — search by title, filter by
            genre, and build your watchlist. No API key needed.
          </p>
        </div>
      </section>

      <main className="container">
        <section className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies… e.g. Interstellar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="filters" role="group" aria-label="Filter by genre">
            {genres.map((g) => (
              <button
                key={g}
                type="button"
                className={genre === g ? "filter-btn is-active" : "filter-btn"}
                onClick={() => setGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <label className="fav-toggle">
            <input
              type="checkbox"
              checked={showFavsOnly}
              onChange={(e) => setShowFavsOnly(e.target.checked)}
            />
            Show watchlist only
          </label>
        </section>

        <p className="counts">
          Showing {visibleMovies.length} of {movies.length} movies
          {favourites.length > 0 &&
            ` · ${favourites.length} in watchlist`}
        </p>

        <MovieList
          movies={visibleMovies}
          favourites={favourites}
          onToggleFavourite={toggleFavourite}
        />

        <section className="how-it-works">
          <h2 className="section-title">How React works here</h2>
          <ul>
            <li>
              <strong>Components:</strong> App, MovieList and MovieCard are
              separate components — each is a function returning UI.
            </li>
            <li>
              <strong>Props:</strong> App passes data down — MovieList gets the
              filtered movies, each MovieCard gets one movie object, its
              favourite status, and a click handler.
            </li>
            <li>
              <strong>State:</strong> search text, genre, watchlist and the
              watchlist-only switch are useState values in App. Changing any
              of them re-renders the list instantly.
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © 2026 CineShelf. Minor project — React Movie Library (Vite +
            React).
          </p>
        </div>
      </footer>
    </>
  );
}
