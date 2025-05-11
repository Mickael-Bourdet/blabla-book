import BookDetail from "../components/DetailedBook";
import RecommendedBooks from "../components/RecommendedBooks";
import { ReviewSection } from "../components/review";

const DetailPage = () => (
  <>
    <BookDetail />
    <ReviewSection />
    <RecommendedBooks />
  </>
);

export default DetailPage;
