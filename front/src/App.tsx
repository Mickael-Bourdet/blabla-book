import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Authentication from "./pages/Authentication";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <>
      <Navbars />
      <Header />
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
