import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './Api';
import { PageContainer, ContentList, ContentItem } from './StyledComponents';

import styled from 'styled-components';



const ActorImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin-right: 10px;
`;

const ActorName = styled.span`
  color: #fff;
`;


export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData || []);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <PageContainer>
      <ContentList>
        {cast.map(actor => (
          <ContentItem key={actor.id}>
            <ActorImage src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'placeholder_image_url_here'} alt={actor.name} />
            <ActorName>{actor.name}</ActorName>
          </ContentItem>
        ))}
      </ContentList>
    </PageContainer>
  );
}
