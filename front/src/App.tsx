import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Library from "./components/Library";
import SettingUser from "./pages/SettingsUser";
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
        <Route path="/library" element={<Library />} />
        <Route path="/user/:userId/settings" element={<SettingUser />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
