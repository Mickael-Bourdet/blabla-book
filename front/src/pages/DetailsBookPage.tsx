import BookDetail from "../components/DetailedBook";
import RecommendedBooks from "../components/RecommendedBooks";

const DetailPage = () => (
  <main className="p-4 pb-20 bg-body">
    <BookDetail />
    <RecommendedBooks />
  </main>
);

export default DetailPage;
