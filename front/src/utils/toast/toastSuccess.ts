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

export const toastInfo = (message: string) => {
  iziToast.info({
    position: "topRight",
    timeout: 4000,
    message
  });
}

export const toastWarning = (message: string) => {
  iziToast.warning({
    position: "center",
    timeout: 10000,
    message,
  })
}


