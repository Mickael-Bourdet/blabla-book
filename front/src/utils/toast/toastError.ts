import iziToast from "izitoast";

/**
 *
 * @param message
 */
export const toastError = (message: string | string[]) => {
  // Si c'est un tableau d'erreurs, afficher chaque erreur séparément
  if (Array.isArray(message)) {
    // Pour éviter trop de notifications, limiter à 3-4 erreurs maximum
    const limitedMessages = message.slice(0, 4);

    // Afficher chaque erreur avec un délai croissant pour éviter qu'elles se superposent
    limitedMessages.forEach((msg, index) => {
      setTimeout(() => {
        iziToast.error({
          title: "Erreur",
          message: msg,
          position: "topRight",
          timeout: 5000 + index * 500, // Augmenter le temps d'affichage pour les erreurs suivantes
          color: "red",
        });
      }, index * 300); // Délai pour l'apparition de chaque toast
    });

    // Si on a tronqué le tableau, ajouter un message pour le signaler
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
    // Comportement d'origine pour un message unique
    iziToast.error({
      title: "Erreur",
      message,
      position: "topRight",
      timeout: 5000,
      color: "red",
    });
  }
};
