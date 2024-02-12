import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../components/Api';

const TrendingMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={url} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
};

export default TrendingMovie;
