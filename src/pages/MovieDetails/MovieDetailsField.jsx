import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function MovieDetailsField({ movie }) {
  return (
    <div className="md:flex-col flex mt-10 mx-auto w-10/12 md:gap-4 gap-6 ">
      {movie.poster_path && (
        <img
          loading="lazy"
          className="md:w-[420px] mx-auto"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title ?? movie.name}
          width={290}
        />
      )}
      <div className=" md:w-full sm2:w-5/6 w-4/6 flex flex-col gap-1 mx-auto">
        <h2 className="text-2xl font-bold md:text-lg">
          {movie.title ?? movie.name}
        </h2>
        <p className="mt-6 md:mt-0 lg:mt-2 flex items-center gap-1">
          <FaStar className=" fill-amber-400" />
          {movie.vote_average}
        </p>
        <p>{movie.release_date}</p>
        <p className="max-w-[500px] md:text-xs text-sm">{movie.overview}</p>
        <h3 className="text-xl font-semibold md:mt-0 lg:mt-2 mt-6">Genres</h3>
        <ul className="flex gap-4">
          {movie.poster_path &&
            movie.genres.map(gener => (
              <li className="md:text-sm" key={gener.id}>
                {gener.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetailsField.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
