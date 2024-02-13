import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../components/Api';
import styled from 'styled-components';

// Leniwie zaimportowane komponenty
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

const PageContainer = styled.div`
  color: #ffc0cb;
  background-color: #000;
  padding: 20px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #ffc0cb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <nav>
            <ToggleButton as="a" href={`/movies/${movieId}/cast`}>Cast</ToggleButton>
            <ToggleButton as="a" href={`/movies/${movieId}/reviews`}>Reviews</ToggleButton>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="cast" element={<Cast movieId={movieId} />} />
              <Route path="reviews" element={<Reviews movieId={movieId} />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </PageContainer>
  );
}
