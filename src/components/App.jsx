// import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import NotFound from '../pages/NotFound';
// import styled from 'styled-components';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// const StyledLink = styled(NavLink)`
//   color: black;
//   text-decoration: none;

//   &.active {
//     color: orange;
//     text-decoration: underline;
//   }
// `;

// const Trending = 'https://api.themoviedb.org/3/trending/movie/{time_window}'

// axios.defaults.headers.common['Authorization'] =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzBiNzJlNzNiMjUyN2U0ZjRlMDYxZDZmZDBmYTlkYiIsInN1YiI6IjY1YzU0YzRjOGUyMGM1MDE3ZDMyYWUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mBgQvEWwVciHVQqyL9i_5En4oUCDiV9ZbznosdE-cI';

// function TrendingList() {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const getTrending = async () => {
//       try {
//         const res = await axios.get(
//           'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
//         );
//         setList(res.data.results);
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };
//     getTrending();
//   }, []);

//   return (
//     <div>
//       <h2>Trending Today</h2>
//       <ul>
//         {list.map(movie => (
//           <Link to={`/movies/${movie.id}`} key={movie.id}>{movie.title}</Link>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function TrendingMovie() {
//   const [movie, setMovie] = useState(null);
//   useEffect(() => {
//     const getMovie = async () => {
//       const res = await axios.get(
//         'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
//       );
//       console.log(res);
//       setMovie(res.data.results[0]);
//     };
//     getMovie();
//   }, []);
//   return (
//     <div>
//       <h2>Trending Movie</h2>
//       {movie ? (
//         <div>
//           <h3>{movie.title}</h3>
//           <p>{movie.overview}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <header>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/movies">Movies</StyledLink>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/trending" element={<TrendingList />} /> */}

//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:id" element={<TrendingMovie />} />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
