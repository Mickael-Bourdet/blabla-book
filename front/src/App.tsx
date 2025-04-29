import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Library from "./pages/Library";
import SettingsUser from "./pages/SettingsUser";
import ProfilePage from "./components/ProfilePage";
import Authentication from "./pages/Authentication";


function App() {
  return (
    <>
      <Navbars />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:bookId" element={<DetailPage />} />
        <Route path="/books" element={<Library />} />
        <Route path="/library" element={<Library />} />
        <Route path="/settings" element={<SettingsUser />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
