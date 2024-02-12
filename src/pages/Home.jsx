import { useState, useEffect } from 'react';
import {
  PageContainer,
  StyledLink,
  ContentList,
  ContentItem,
} from '../components/StyledComponents';

import { fetchTrendingMovies } from '../components/Api';

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
      <h2>Trending Today</h2>
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
