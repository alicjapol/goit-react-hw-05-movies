import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home'
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import TrendingMovie from 'pages/TrendingMovie';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;


axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBiNzJlNzNiMjUyN2U0ZjRlMDYxZDZmZDBmYTlkYiIsInN1YiI6IjY1YzU0YzRjOGUyMGM1MDE3ZDMyYWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mBgQvEWwVciHVQqyL9i_5En4oUCDiV9ZbznosdE-cI';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/trending" element={<TrendingList />} /> */}

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<TrendingMovie />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
