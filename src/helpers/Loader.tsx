import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-80 flex justify-center items-center z-30">
      <div className=" bg-opacity-70 rounded max-w-[90%] md:max-w-[720px] p-2 overflow-auto">
        <RotatingLines
          strokeColor="rgb(36, 78, 120)"
          strokeWidth="5"
          animationDuration="0.75"
          width="42"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
