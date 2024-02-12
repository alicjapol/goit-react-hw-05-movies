import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './Api';
import { PageContainer, ContentList, ContentItem } from './StyledComponents';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const creditsData = await fetchMovieCredits(movieId);
        setCast(creditsData.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <PageContainer>
      <h2>Cast</h2>
      <ContentList>
        {cast.map(actor => (
          <ContentItem key={actor.id}>
            {actor.name} as {actor.character}
          </ContentItem>
        ))}
      </ContentList>
    </PageContainer>
  );
}
