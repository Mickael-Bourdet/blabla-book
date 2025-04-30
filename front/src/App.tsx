import "./App.css";
import HomePage from "./pages/Home";
import Navbars from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DetailPage from "./pages/DetailsBookPage";
import Library from "./components/Library";
import SettingsUser from "./pages/SettingsUser";
import ProfilePage from "./components/ProfilePage";
import Authentication from "./pages/Authentication";
import ErrorNotFound from "./pages/ErrorNotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbars />
      <Header />
      <main className="md:ml-64 flex flex-col min-h-screen bg-body ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:bookId" element={<DetailPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/user/:userId/settings" element={<SettingsUser />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        
      </main>
      <Footer />
    </>
  );
}

export default App;
