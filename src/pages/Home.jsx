import { useState, useEffect } from 'react';
import {
  PageContainer,
  StyledLink,
  ContentList,
  ContentItem,
} from '../components/StyledComponents';
import styled from 'styled-components';

import { fetchTrendingMovies } from '../components/Api';

const StyledHeader  = styled.h2`
font-size: 36px;
text-align: center;
text-shadow: 2px 2px 10px 
`;

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };
    getTrending();
  }, []);

  return (
    <PageContainer>
      <StyledHeader>
       Trending Today
      </StyledHeader>
      <ContentList>
        {trendingMovies.map(movie => (
          <ContentItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </ContentItem>
        ))}
      </ContentList>
    </PageContainer>
  );
}
