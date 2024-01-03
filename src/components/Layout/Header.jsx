import { SiThemoviedatabase } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="px-6  fixed top-0 left-0 right-0  bg-black z-20 shadow-lg shadow-blue-950">
      <nav className="py-2 px-6 flex items-center md:w-full md:px-1 gap-20 w-full pr-24">
        <NavLink
          className=" hover:scale-105 transition-all duration-300 "
          to="/"
        >
          <SiThemoviedatabase size={45} className="fill-blue-200" />
        </NavLink>
        <NavLink
          className="md:text-xs after:bottom-4 py-4 after:opacity-30 relative opacity-60
             text-blue-300 hover:opacity-100 transition-all duration-[600ms]
             hover:brightness-125 after:transition-all after:duration-300 
             after:content after:absolute after:left-0 after:right-0 after:h-[0.4px] 
             after:rounded-xl after:transform after:origin-bottom after:bg-blue-500
              after:scale-x-0 hover:after:scale-x-100 hover flex flex-col ml-auto"
          to="/"
        >
          Back Home
          <span className="w-full absolute scale-x-0  top-8 bg-transparent"></span>
        </NavLink>
        <NavLink
          className=" md:text-xs after:bottom-4 py-4 after:opacity-30 relative opacity-60
             text-blue-300 hover:opacity-100 transition-all duration-[600ms]
             hover:brightness-125 after:transition-all after:duration-300 
             after:content after:absolute after:left-0 after:right-0 after:h-[0.4px]
              after:rounded-xl after:transform after:origin-bottom after:bg-blue-500 
              after:scale-x-0 hover:after:scale-x-100 hover flex flex-col"
          to="/movies"
        >
          Movies
          <span className="w-full absolute scale-x-0 top-8 bg-transparent"></span>
        </NavLink>
      </nav>
    </header>
  );
};
