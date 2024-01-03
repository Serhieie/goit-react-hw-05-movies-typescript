import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';
import { API_KEY, BASE_URL, options } from '../../constants/constants';
import { errorToast, warningToast } from '../../helpers/toasts';
import { debounce } from 'lodash';
import MovieList from './MoviesList';
import MovieText from './MoviesText';
import MovieForm from './MovieForm';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
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

  const handleSubmit = values => {
    if (!values.movieId) {
      return warningToast();
    }
    setSearchParams({ movieId: values.movieId });
  };

  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(movieId.toLowerCase())
    );
  }, [movies, movieId]);

  return (
    <section className="mx-auto mt-28 flex justify-center items-center flex-col bg-gradient-to-t via-blue-950 from-black to-black">
      <h2 className="font-h1Font text-4xl mb-2 text-blue-100 md:text-2xl">
        Find your Movie
      </h2>
      <MovieForm value={movieId} handleSubmit={handleSubmit} />
      <MovieText movieId={movieId} />
      {movieId && (
        <MovieList visibleMovies={visibleMovies} location={location} />
      )}
    </section>
  );
}
