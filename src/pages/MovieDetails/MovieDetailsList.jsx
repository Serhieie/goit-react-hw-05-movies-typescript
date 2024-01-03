import { Link } from 'react-router-dom';

export default function MovieDetailsList() {
  return (
    <ul className="md:gap-4 flex justify-center items-center gap-20 w-4/6 mx-auto lg:mt-16 mt-8">
      <li className="flex justify-center">
        <Link
          className="bg-blue-900 hover:bg-blue-700  py-1 px-2  text-center  w-[140px] rounded transition-all duration-300"
          to="cast"
        >
          Cast
        </Link>
      </li>
      <li className="flex justify-center">
        <Link
          className="bg-blue-900 hover:bg-blue-700  py-1 px-2  text-center w-[140px] rounded transition-all duration-300"
          to="reviews"
        >
          Reviews
        </Link>
      </li>
    </ul>
  );
}
