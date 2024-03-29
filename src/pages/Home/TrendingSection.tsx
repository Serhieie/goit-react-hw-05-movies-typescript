import TrendingSectionList from './TrendingSectionList.tsx';
import { Movie } from './Home.types.ts';
import React from 'react';

const TrandingSection: React.FC<{ restOfMovies: Movie[] }> = ({
  restOfMovies,
}) => {
  return (
    <section className="bg-gradient-to-t via-blue-950 from-black to-black">
      <h2
        className=" md:text-sm  md:mb-0 md:after:left-[36%] sm2:text-xl  sm2:after:left-[32%] sm2:after:top-[26px] 
          md:after:right-[30%] md:after:top-[24px] ml-[4%] mb-2 text-3xl font-bold text-blue-200 after:bottom-4 py-4 relative 
          transition-all duration-[600ms]  after:transition-all after:duration-300 after:content
      after:absolute after:left-64 after:right-[70%] after:top-[32px] sm2:after:h-3  md:after:h-2 after:h-3 after:rounded-xl
      after:transform after:origin-left   after:bg-gradient-to-r after:via-blue-950 after:from-blue-400 after:to-black 
       "
      >
        Trending movies
      </h2>
      <TrendingSectionList restOfMovies={restOfMovies} />
    </section>
  );
};

export default TrandingSection;
