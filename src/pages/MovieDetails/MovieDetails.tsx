import React, { useRef, useEffect, useState } from 'react';
import { API_KEY, BASE_URL, options } from '../../constants/constants.ts';
import axios from 'axios';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { IoPlaySkipBackSharp } from 'react-icons/io5';
import Loader from '../../helpers/Loader.tsx';
import { errorToast } from '../../helpers/toasts.js';
import MovieDetailsField from './MovieDetailsField.tsx';
import MovieDetailsList from './MovieDetailsList.tsx';
import NoPage from '../../components/NoPage.tsx';
import { Movie } from '../Home/Home.types.ts';

export default function MovieDetails() {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const location = useLocation();
  const backLinkLocation = useRef<string>(location.state?.from ?? '/');
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        const response = await axios.get<Movie>(
          `${BASE_URL}movie/${movieId}?${API_KEY}`,
          options
        );
        setMovie(response.data);
      } catch (error) {
        errorToast();
        setError(true);
      }
    };
    fetchData();
  }, [movieId]);

  return error ? (
    <NoPage />
  ) : (
    <div className="md:mt-20 mt-28">
      <Link
        className="bg-blue-900 hover:bg-blue-700 fixed z-100 right-0 top-[86px] 
         py-0.5 px-3  md:py-1 md:px-2   md:mr-[20px] mr-[90px] 
         rounded-full flex items-center gap-1 text-xs transition-all duration-300"
        to={backLinkLocation.current}
      >
        <IoPlaySkipBackSharp size={18} />
        back
      </Link>
      {movie ? (
        <>
          <MovieDetailsField movie={movie} />
          <MovieDetailsList />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
