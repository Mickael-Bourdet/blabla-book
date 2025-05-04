import iziToast from "izitoast";

/**
 * 
 * @param message 
 */
export const toastError = (message: string) => {
  iziToast.error({
    title: "Erreur",
    message,
    position: "topRight",
    timeout: 5000,
    color: "red",
  });
};