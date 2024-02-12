import { lazy } from 'react';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const NotFound = lazy(() => import('../pages/NotFound'));

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
