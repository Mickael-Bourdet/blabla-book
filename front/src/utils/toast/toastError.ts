import iziToast from "izitoast";

/**
 *
 * @param message
 */
export const toastError = (message: string | string[]) => {
  if (Array.isArray(message)) {
    const limitedMessages = message.slice(0, 4);

    limitedMessages.forEach((msg, index) => {
      setTimeout(() => {
        iziToast.error({
          title: "Erreur",
          message: msg,
          position: "topRight",
          timeout: 5000 + index * 500,
          color: "red",
        });
      }, index * 300);
    });

    if (message.length > limitedMessages.length) {
      setTimeout(() => {
        iziToast.info({
          title: "Information",
          message: `+ ${
            message.length - limitedMessages.length
          } autre(s) erreur(s)`,
          position: "topRight",
          timeout: 5000,
          color: "blue",
        });
      }, limitedMessages.length * 300);
    }
  } else {
    iziToast.error({
      title: "Erreur",
      message,
      position: "topRight",
      timeout: 5000,
      color: "red",
    });
  }
};
