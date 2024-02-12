import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../components/Api'; // Upewnij się, że ścieżka jest poprawna
import { PageContainer, ContentList, ContentItem, ToggleButton } from '../components/StyledComponents'; // Upewnij się, że ścieżka jest poprawna

const Cast = lazy(() => import('../components/Cast')); // Upewnij się, że ścieżka jest poprawna
const Reviews = lazy(() => import('../components/Reviews')); // Upewnij się, że ścieżka jest poprawna

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCredits, setShowCredits] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieById(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <PageContainer>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <h3>
            <ToggleButton onClick={() => setShowCredits(!showCredits)}>Cast</ToggleButton>
          </h3>
          {showCredits && (
            <Suspense fallback={<div>Loading cast...</div>}>
              <Cast movieId={movieId} />
            </Suspense>
          )}
          <h3>
            <ToggleButton onClick={() => setShowReviews(!showReviews)}>Reviews</ToggleButton>
          </h3>
          {showReviews && (
            <Suspense fallback={<div>Loading reviews...</div>}>
              <Reviews movieId={movieId} />
            </Suspense>
          )}
        </div>
      )}
    </PageContainer>
  );
}
