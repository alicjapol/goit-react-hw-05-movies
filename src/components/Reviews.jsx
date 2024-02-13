import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './Api';
import { PageContainer, ContentList, ContentItem } from './StyledComponents';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        if (reviewsData && Array.isArray(reviewsData.results)) {
          setReviews(reviewsData.results);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
        setReviews([]); 
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <PageContainer>
      {reviews.length > 0 ? (
        <ContentList>
          {reviews.map(review => (
            <ContentItem key={review.id}>
              <strong>{review.author}</strong>: {review.content}
            </ContentItem>
          ))}
        </ContentList>
      ) : (
        <p>No reviews yet.</p>
      )}
    </PageContainer>
  );
}
