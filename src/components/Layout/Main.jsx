import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import RotatingLines from 'helpers/Loader';
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
      <Suspense fallback={<RotatingLines />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
