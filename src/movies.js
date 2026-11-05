// ============================================================
// Local movie data — no API key needed.
// Each movie is a plain object; MovieCard receives one movie
// object as a prop and renders it.
// ============================================================

export const movies = [
  {
    id: 1,
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy",
    rating: 8.4,
    description:
      "Two friends search for their long-lost college mate, reliving the lessons — and the laughs — of their engineering days.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    emoji: "🎓",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    description:
      "Explorers travel through a wormhole in space to find a new home for humanity as Earth slowly dies.",
    gradient: "linear-gradient(135deg, #0f172a, #4f46e5)",
    emoji: "🚀",
  },
  {
    id: 3,
    title: "Dangal",
    year: 2016,
    genre: "Drama",
    rating: 8.4,
    description:
      "A former wrestler trains his daughters to become champions, defying every expectation of his village.",
    gradient: "linear-gradient(135deg, #dc2626, #f97316)",
    emoji: "🤼",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy and tests the hero's limits.",
    gradient: "linear-gradient(135deg, #1f2937, #111827)",
    emoji: "🦇",
  },
  {
    id: 5,
    title: "Sholay",
    year: 1975,
    genre: "Action",
    rating: 8.2,
    description:
      "Two small-time crooks are hired by a retired policeman to capture the dreaded dacoit Gabbar Singh.",
    gradient: "linear-gradient(135deg, #b45309, #78350f)",
    emoji: "🤠",
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    description:
      "A thief who steals secrets from dreams is offered one last job: plant an idea inside a target's mind.",
    gradient: "linear-gradient(135deg, #0369a1, #0ea5e9)",
    emoji: "🌀",
  },
  {
    id: 7,
    title: "Hera Pheri",
    year: 2000,
    genre: "Comedy",
    rating: 8.2,
    description:
      "Three broke roommates stumble into a kidnapping ransom scheme and chaos follows every wrong number.",
    gradient: "linear-gradient(135deg, #16a34a, #84cc16)",
    emoji: "📞",
  },
  {
    id: 8,
    title: "Taare Zameen Par",
    year: 2007,
    genre: "Drama",
    rating: 8.4,
    description:
      "A dyslexic child who struggles at school finds a teacher who finally sees the artist inside him.",
    gradient: "linear-gradient(135deg, #7c3aed, #db2777)",
    emoji: "🎨",
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    description:
      "After the Snap, the surviving Avengers assemble for one final stand against Thanos.",
    gradient: "linear-gradient(135deg, #7f1d1d, #4338ca)",
    emoji: "🛡️",
  },
  {
    id: 10,
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: "Comedy",
    rating: 8.2,
    description:
      "Three friends on a bachelor trip in Spain face their fears — and rediscover what living means.",
    gradient: "linear-gradient(135deg, #0891b2, #22d3ee)",
    emoji: "✈️",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    description:
      "A banker sentenced to life in prison forms an unlikely friendship and never gives up hope.",
    gradient: "linear-gradient(135deg, #334155, #64748b)",
    emoji: "🔑",
  },
  {
    id: 12,
    title: "Koi... Mil Gaya",
    year: 2003,
    genre: "Sci-Fi",
    rating: 7.1,
    description:
      "A young man with a developmental disability befriends an alien left behind on Earth.",
    gradient: "linear-gradient(135deg, #059669, #0d9488)",
    emoji: "👽",
  },
];

// The genre list for the filter is derived from the data,
// so adding a movie with a new genre adds a filter button.
export const genres = ["All", ...new Set(movies.map((m) => m.genre))];
