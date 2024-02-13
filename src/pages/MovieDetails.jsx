import { useState, useEffect, Suspense, lazy } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom'; 
import { fetchMovieById } from '../components/Api';
import { PageContainer } from '../components/StyledComponents';
import styled from 'styled-components';

// const StyledLink = styled.Link`
//   color: #ffc0cb;
//   background: none;
//   border: none;
//   cursor: pointer;
//   text-decoration: none;
//   margin: 10px 0; // Dodano dla odstępu
//   &:hover {
//     text-decoration: underline;
//   }
// `;

const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <PageContainer>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <Link to="cast">Show Cast</Link>
          <Link to="reviews">Show Reviews</Link>
            <Outlet />
        </>
      )}
    </PageContainer>
  );
}
