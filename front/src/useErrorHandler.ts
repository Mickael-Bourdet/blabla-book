import { useErrorBoundary } from "react-error-boundary";

export function useErrorHandler() {
  const { showBoundary } = useErrorBoundary();

  /**
   * function to handle async error (API)
   */
  const handleError = (error: unknown) => {
    console.error("Une erreur s'est produite:", error);

    // Change the error in an object Error if it's not
    if (error instanceof Error) {
      showBoundary(error);
    } else {
      showBoundary(new Error(String(error)));
    }
  };

  return { handleError };
}
