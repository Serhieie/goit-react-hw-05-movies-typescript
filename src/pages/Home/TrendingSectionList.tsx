import { Link } from 'react-router-dom';
import React from 'react';
import { Movie } from './Home.types.ts';

const CastList: React.FC<{ restOfMovies: Movie[] | null | undefined }> = ({
  restOfMovies,
}) => {
  return (
    <ul className="grid sm2:grid-cols-4 md:grid-cols-2 grid-cols-7 w-11/12 mx-auto gap-3">
      {restOfMovies &&
        restOfMovies.map(movie => (
          <li
            key={movie.id}
            className="transition-all duration-300 hover:scale-105"
          >
            <Link to={`/movies/${movie.id}`}>
              <img
                loading="lazy"
                className=" rounded-sm overflow-hidden"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title || movie.name || 'movie poster'}
              />
              <h3>{movie.title ?? movie.name}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default CastList;
//варіант з допомогою srcSet та sizes
// export default function CastList({ restOfMovies }) {
//   return (
//     <ul className="grid sm2:grid-cols-4 md:grid-cols-2 grid-cols-7 w-11/12 mx-auto gap-3">
//       {restOfMovies.map(movie => {
//         const imageBaseUrl = 'https://image.tmdb.org/t/p/';
//         const sizes = [
//           { size: 'w300', width: 300 },
//           { size: 'w500', width: 500 },
//           { size: 'w780', width: 780 },
//         ];
//         const srcSet = sizes.map(size => {
//           const imageUrl = `${imageBaseUrl}${size.size}${movie.poster_path}`;
//           return `${imageUrl} ${size.width}w`;
//         }).join(', ');

//         return (
//           <li
//             key={movie.id}
//             className="transition-all duration-300 hover:scale-105"
//           >
//             <Link to={`/movies/${movie.id}`}>
//               <img
//                 loading="lazy"
//                 className="rounded-sm overflow-hidden"
//                 src={`${imageBaseUrl}original${movie.poster_path}`}
//                 srcSet={srcSet}
//                 sizes="(max-width: 600px) 300px, (max-width: 960px) 500px, 780px"
//                 alt={movie.title ?? movie.name}
//               />
//               <h3>{movie.title ?? movie.name}</h3>
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
