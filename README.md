# React Movie Library

A small movie browsing app built as a **minor project for my Pregrad course**. It clearly demonstrates the three core React ideas — **components, props, and state** — using a local movie data set, so no API key or internet connection is needed.

## Features

- **12 movies, local data** — titles, years, genres, ratings and descriptions in `src/movies.js` (no API key needed)
- **Movie cards via components + props** — `MovieList` maps over the data and renders one `MovieCard` per movie, passing the movie object, its favourite status, and a click handler down as props
- **Search** — filters by movie title as you type
- **Genre filter** — All / Action / Comedy / Drama / Sci-Fi, derived from the data itself
- **Favourites / watchlist toggle using state** — heart button on each card; the header shows the watchlist count and a "Show watchlist only" switch filters to it
- **Live counts** — "Showing X of 12 movies" updates on every keystroke or click
- **Responsive grid** — 3 columns → 2 → 1, same indigo-and-white styling as minor projects 1 & 2

## How to run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

This produces a production build in `dist/` (verified clean at submission time).

## How React works here (for the viva / demo)

| Concept | Where it lives |
| --- | --- |
| **State** | `App.jsx` holds four `useState` values: `searchQuery`, `genre`, `favourites` (array of movie ids), `showFavsOnly` |
| **Props down** | App passes the filtered list to `MovieList`; `MovieList` passes one `movie`, `isFavourite` and an `onToggle` handler to each `MovieCard` |
| **Events up** | A card's button calls `onToggle`, which calls App's `toggleFavourite` — the state lives in the parent, the child just reports the click |
| **Derived data** | `visibleMovies` is computed from state on every render — no separate stored copy, so search + genre + watchlist filters always agree |

## Tech used

- React (JavaScript) + Vite
- Plain CSS (flexbox/grid, gradients, transitions, media queries)
- No external images — card visuals are CSS gradients + emoji

## Files

| File | What it is |
| --- | --- |
| `src/App.jsx` | State, filters, page layout — the parent component |
| `src/movies.js` | Local movie data set + derived genre list |
| `src/components/MovieList.jsx` | Grid component: maps movies to cards |
| `src/components/MovieCard.jsx` | Single movie card component (props-driven) |
| `src/App.css` | All styling |
| `src/main.jsx` | React entry point (renders App) |

---

Built by Jay Solanki — Computer Engineering student, Government Engineering College Rajkot.
