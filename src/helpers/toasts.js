import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const errorToast = () => {
  toast.error('Sorry but this element is not full', {
    position: 'top-right',
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const warningToast = () => {
  toast.warn('Enter movie titile', {
    position: 'top-right',
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
