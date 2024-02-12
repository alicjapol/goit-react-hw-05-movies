import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  SearchForm,
  SearchInput,
  SearchButton,
} from '../components/StyledComponents';
import { searchMovies } from '../components/Api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const fetchedMovies = await searchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  return (
    <PageContainer>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      <div>
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {movie.title}
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
