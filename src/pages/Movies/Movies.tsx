import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { API_KEY, BASE_URL, options } from '../../constants/constants.ts';
import { errorToast, warningToast } from '../../helpers/toasts.js';
import { debounce } from 'lodash';
import MovieList from './MoviesList.tsx';
import MovieText from './MoviesText.tsx';
import MovieForm from './MovieForm.tsx';
import { Movie } from '../Home/Home.types.ts';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}search/movie?query=${movieId}&${API_KEY}`,
          options
        );
        setMovies(response.data.results);
      } catch (error) {
        errorToast();
      }
    };
    const delayedQuery = debounce(fetchData, 300);
    delayedQuery();
    return () => delayedQuery.cancel();
  }, [movieId]);

  const handleSubmit = (values: { movieId: string }) => {
    if (!values.movieId) {
      return warningToast();
    }
    setSearchParams({ movieId: values.movieId });
  };

  const visibleMovies = useMemo(() => {
    return movies.filter((movie: Movie) =>
      movie.title?.toLowerCase().includes(movieId.toLowerCase())
    );
  }, [movies, movieId]);

  return (
    <section className="mx-auto mt-28 flex justify-center items-center flex-col bg-gradient-to-t via-blue-950 from-black to-black">
      <h2 className="font-h1Font text-4xl mb-2 text-blue-100 md:text-2xl">
        Find your Movie
      </h2>
      <MovieForm handleSubmit={handleSubmit} />
      <MovieText movieId={movieId} />
      {movieId && <MovieList visibleMovies={visibleMovies} />}
    </section>
  );
};

export default Movies;
