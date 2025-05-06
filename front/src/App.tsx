import { Route, Routes, useLocation } from "react-router-dom";
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
import SearchPage from "./pages/SearchPage";
import ErrorNotFound from "./pages/ErrorNotFound";
import About from "./pages/About";
import Mentions from "./pages/Mentions";
import ErrorServer from "./pages/ErrorServer";
import { ErrorBoundary } from "react-error-boundary";
import Logout from "./components/authentication/Logout";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbars />
      <main className="md:ml-64 flex flex-col min-h-100 bg-body justify-start">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:bookId" element={<DetailPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/settings" element={<SettingsUser />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentions-legales" element={<Mentions />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </main>
      <Footer />
    </>
  );
}

export default App;
