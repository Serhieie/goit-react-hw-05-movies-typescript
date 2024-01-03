import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../helpers/Loader.tsx';
import { ToastContainer } from 'react-toastify';

export const Main = () => {
  return (
    <main className="flex-1">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
