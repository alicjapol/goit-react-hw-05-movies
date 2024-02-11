import { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';


export default function Home() {

  const [list, setList] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
        );
        setList(res.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <ul>
        {list.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
