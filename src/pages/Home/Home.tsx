import React, { useEffect, useState, useMemo } from 'react';
import { API_KEY, BASE_URL, options } from '../../constants/constants.ts';
import axios from 'axios';
import HeroSection from './HeroSection.tsx';
import TrendingSection from './TrendingSection.tsx';
import { errorToast } from '../../helpers/toasts.js';
import NoPage from '../../components/NoPage.tsx';
import { Movie } from './Home.types.ts';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [firstMovie, setFirstMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<boolean>(false);

  const restOfMovies: Movie[] = useMemo(() => movies.slice(1, 15), [movies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}trending/all/day?${API_KEY}`,
          options
        );
        setMovies(response.data.results);
        setFirstMovie(response.data.results[0]);
      } catch (error) {
        setError(true);
        errorToast();
      }
    };
    fetchData();
  }, []);

  return error ? (
    <NoPage />
  ) : (
    <>
      <HeroSection firstMovie={firstMovie} />
      <TrendingSection restOfMovies={restOfMovies} />
    </>
  );
};

export default Home;
