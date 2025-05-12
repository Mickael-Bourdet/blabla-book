import iziToast from "izitoast";

/**
 * Displays error messages as toast notifications.
 *
 * @param {string | string[]} message - The error message(s) to display.
 * Can be a single string or an array of strings.
 */
export const toastError = (message: string | string[]) => {
  // Handle case when message is an array of strings
  if (Array.isArray(message)) {
    // Limit the number of displayed messages to 4 to avoid overwhelming the user
    const limitedMessages = message.slice(0, 4);

    // Display each error message with a slight delay between them
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

    // If there are more messages than displayed, show an info toast with the count
    if (message.length > limitedMessages.length) {
      setTimeout(() => {
        iziToast.info({
          title: "Information",
          message: `+ ${message.length - limitedMessages.length} autre(s) erreur(s)`,
          position: "topRight",
          timeout: 5000,
          color: "blue",
        });
      }, limitedMessages.length * 300);
    }
  } else {
    // Handle case when message is a single string
    iziToast.error({
      title: "Erreur",
      message,
      position: "topRight",
      timeout: 5000,
      color: "red",
    });
  }
};
