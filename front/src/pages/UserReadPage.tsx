import { Link } from "react-router-dom";
import { useAuthStore } from "../utils/store/useAuthStore";

const UserReadPage = () => {
  const { user } = useAuthStore();

  if (!user?.id) {
    return <p className="text-center mt-10 text-red-500">Connecte-toi pour voir tes livres lus.</p>;
  }

  return (
    <section className="content ml-[5vw] mr-[5vw] pt-10 pb-20">
      
      <Link
        to="/profile"
        className="text-blue-700 underline font-title text-lg hover:text-blue-500"
      >
        ← Retour au profil
      </Link>
    </section>
  );
};

export default UserReadPage;
