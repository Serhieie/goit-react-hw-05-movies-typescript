import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.tsx';
import NoPage from './NoPage.tsx';
import React from 'react';

//запитання яку функцію Helper найчастіше використовують для обробки іменованного єкспорту?
const Cast = lazy(() => import('./Cast/Cast.tsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.tsx'));
const MovieDetails = lazy(
  () => import('../pages/MovieDetails/MovieDetails.tsx')
);
const Movies = lazy(() => import('../pages/Movies/Movies.tsx'));
const Home = lazy(() => import('../pages/Home/Home.tsx'));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
