import {Route,Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Navbars from './components/Navbar';
import Footer from './components/Footer';
import DetailPage from './pages/DetailsBookPage';
import ProfilePage from './components/ProfilePage';
import Library from './pages/Library';


function App() {

  return (
    <>
      <Navbars/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/books" element={<Library/>} />
        <Route path="/books/:bookId" element={<DetailPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
