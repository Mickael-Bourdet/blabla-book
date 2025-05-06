import iziToast from "izitoast";

export const toastError = (message: string) => {
  iziToast.error({
    title: "Erreur",
    message,
    position: "topRight",
    timeout: 4000,
    color: "red",
  });
};