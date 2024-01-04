import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { Movie } from '../Home/Home.types';

const MovieList: React.FC<{ visibleMovies: Movie[] }> = ({ visibleMovies }) => {
  const location = useLocation();
  return (
    <ul className="grid md:grid-cols-2 sm2:grid-cols-4 grid-cols-5 w-11/12 mx-auto gap-3 min-h-[450px] h-full">
      {visibleMovies
        .filter(movie => movie.poster_path)
        .map(movie => (
          <li
            key={movie.id}
            className="transition-all duration-300 hover:scale-105"
          >
            <Link
              className="flex flex-col gap-1"
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <img
                loading="lazy"
                className="rounded-sm overflow-hidden object-cover lg:max-h-[190px] max-h-[320px] md:max-h-[300px]"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title || movie.name || 'Movie Poster'}
                width={250}
              />
              <h3 className="text-xs md:text-base">
                {movie.title ?? movie.name}
              </h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default MovieList;
