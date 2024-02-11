import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

//
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBiNzJlNzNiMjUyN2U0ZjRlMDYxZDZmZDBmYTlkYiIsInN1YiI6IjY1YzU0YzRjOGUyMGM1MDE3ZDMyYWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mBgQvEWwVciHVQqyL9i_5En4oUCDiV9ZbznosdE-cI';

export default function TrendingMovie() {
  const [movie, setMovie] = useState(null);
  const url = `https://api.themoviedb.org/3/search/movie${movie?.backdrop_path
}`;

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
      );
      console.log(res);
      setMovie(res.data.results[0]);
    };
    getMovie();
  }, []);
  return (
    <div>
      <h2>Trending Movie</h2>
      {movie ? (
        <div>
          <img  src={url} alt="movies" />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
