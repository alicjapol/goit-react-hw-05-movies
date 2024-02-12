import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import styled from 'styled-components';

const NavHeader = styled.header`
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: #ffc0cb;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ffc0cb;
    color: #000;
  }

  &.active {
    color: #ff1493;
    text-decoration: underline;
  }
`;

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavHeader>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
