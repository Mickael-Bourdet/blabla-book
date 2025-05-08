import iziToast from "izitoast";

/**
 * Displays a success message as a toast notification.
 *
 * @param {string} message - The success message to display.
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
