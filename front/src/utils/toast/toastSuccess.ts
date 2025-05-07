import iziToast from "izitoast";

/**
 *
 * @param message
 */
export const toastSuccess = (message: string) => {
  iziToast.success({
    title: "Succès",
    message,
    position: "topRight",
    timeout: 4000,
    color: "green",
  });
};


