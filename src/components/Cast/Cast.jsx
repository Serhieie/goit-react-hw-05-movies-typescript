import CastList from './CastList';

export default function Cast() {
  return (
    <div className="w-10/12 mx-auto mt-4 py-4">
      <h3
        className="md:text-xl md:after:top-[28px] md:after:h-2 text-2xl font-semibold mb-2 text-blue-200 after:bottom-4 py-4 relative 
          transition-all duration-[600ms]  after:transition-all after:duration-300 after:content
      after:absolute md:after:left-[24%] md:after:right-[20%] sm2:after:left-[18%] after:left-[10%] after:right-[40%] after:top-[28px] after:h-3 after:rounded-xl
      after:transform after:origin-left   after:bg-gradient-to-r after:via-blue-950 after:from-blue-400 after:to-black "
      >
        Casts
      </h3>
      <CastList />
    </div>
  );
}
