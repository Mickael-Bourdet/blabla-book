import { Route, Routes } from "react-router-dom";
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
import About from "./pages/About";
import Mentions from "./pages/Mentions";
import ErrorServer from "./pages/ErrorServer";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <Navbars />
      <Header />
      {/* // Wrap Routes with ErrorBoundary to display a 500 error page when an error occurs.
          // The `resetKeys` prop resets the error state automatically whenever the URL changes.
          // This ensures that navigation via <Link> works correctly by re-rendering the affected components.  */}
      <ErrorBoundary FallbackComponent={ErrorServer} resetKeys={[location.pathname]}>
        <main className="md:ml-64 flex flex-col min-h-screen bg-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:bookId" element={<DetailPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/user/:userId/settings" element={<SettingsUser />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/about" element={<About />} />
            <Route path="/mentions-legales" element={<Mentions />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </main>
      </ErrorBoundary>

      <Footer />
    </>
  );
}

export default App;
