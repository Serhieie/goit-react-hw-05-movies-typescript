import PropTypes from 'prop-types';
export default function MoviesText({ movieId }) {
  return (
    <>
      {!movieId && (
        <div className="transform -skew-y-6 w-10/12">
          <p
            className="text-[200px] text-blue-100 text-center font-h1Font leading-[0.65]
          md:text-[100px] md:mt-12 sm2:text-[160px] select-none"
          >
            Enjoy{' '}
            <span className="bg-gradient-to-r from-blue-200 to-blue-800 text-transparent bg-clip-text z-100">
              your
            </span>{' '}
            choise
          </p>
        </div>
      )}
    </>
  );
}

MoviesText.propTypes = {
  movieId: PropTypes.string.isRequired,
};
