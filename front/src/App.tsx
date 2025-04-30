import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Library from "./components/Library";
import SettingsUser from "./pages/SettingsUser";
import ProfilePageBook from "./pages/Profilepage";
import Authentication from "./pages/Authentication";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Navbars />
      <Header />
      <main className="bg-body">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:bookId" element={<DetailPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/user/:userId/settings" element={<SettingsUser />} />
        <Route path="/profile" element={<ProfilePageBook  />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
