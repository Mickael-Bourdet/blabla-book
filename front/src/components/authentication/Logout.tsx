import { useAuthStore } from "../../utils/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Component to handle user logout.
 *
 * @returns {null} - This component does not render any UI elements.
 */
const Logout = () => {
  // Import the logout function from the auth store
  const { logout } = useAuthStore();

  // Use the navigate function from React Router DOM for redirection
  const navigate = useNavigate();

  useEffect(() => {
    // Call the logout function to log out the user
    logout();

    // Redirect to the home page after logging out
    navigate("/");
  }, [logout, navigate]);

  // This component does not render any UI elements
  return null;
};

export default Logout;