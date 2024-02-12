import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
} from '../components/Api';
import styled from 'styled-components';

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

const ContentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContentItem = styled.li`
  margin: 10px 0;
`;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCredits, setShowCredits] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieById(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  const handleShowCredits = async () => {
    if (credits.length === 0) {
      const creditsData = await fetchMovieCredits(movieId);
      setCredits(creditsData);
    }
    setShowCredits(!showCredits);
  };

  const handleShowReviews = async () => {
    if (reviews.length === 0) {
      const reviewsData = await fetchMovieReviews(movieId);
      setReviews(reviewsData);
    }
    setShowReviews(!showReviews);
  };

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
          <h3>
            <ToggleButton onClick={handleShowCredits}>Cast</ToggleButton>
          </h3>
          {showCredits && (
            <ContentList>
              {credits.map(actor => (
                <ContentItem key={actor.id}>{actor.name}</ContentItem>
              ))}
            </ContentList>
          )}
          <h3>
            <ToggleButton onClick={handleShowReviews}>Reviews</ToggleButton>
          </h3>
          {showReviews &&
            (reviews.length > 0 ? (
              <ContentList>
                {reviews.map(review => (
                  <ContentItem key={review.id}>{review.content}</ContentItem>
                ))}
              </ContentList>
            ) : (
              <p>This movie has no reviews yet.</p>
            ))}
        </div>
      )}
    </PageContainer>
  );
}
