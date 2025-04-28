import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/Navbar";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/bookid" element={<DetailPage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
