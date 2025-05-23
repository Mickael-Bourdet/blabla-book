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

/**
 * Displays an information's message as a toast notification.
 *
 * @param {string} message - The message to display.
 */
export const toastInfo = (message: string) => {
  iziToast.info({
    position: "topRight",
    timeout: 4000,
    message,
  });
};

/**
 * Displays a warning's message as a toast notification.
 *
 * @param {string} message - The message to display.
 */
export const toastWarning = (message: string) => {
  iziToast.warning({
    position: "center",
    timeout: 10000,
    message,
  });
};
