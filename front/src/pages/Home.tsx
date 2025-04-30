import PopularBooks from "../components/PopularsBooks";
import RecommendedBooks from "../components/RecommendedBooks";

const HomePage = () => (
  <main className="bg-body font-body">
    <PopularBooks />
    <RecommendedBooks />
  </main>
);

export default HomePage;
