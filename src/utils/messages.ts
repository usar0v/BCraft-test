import {toast} from "react-toastify";

export const successMessage = (text: string) => {
  return toast.success(text, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    progress: undefined,
  });
};

export const errorMessage = (text: string) => {
  return toast.error(text, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    progress: undefined,
  });
};
