
import {Route,Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Navbars from './components/Navbar';
import Footer from './components/footer';
import DetailPage from './pages/DetailsBookPage';
import Library from './components/Library';
import SettingsUser from './pages/SettingsUser';


function App() {
  return (
    <>
      <Navbars />
      <Routes>

     <Route path='/' element={<HomePage/>} />
     <Route path="/books/:bookid" element={<DetailPage/>} />
     <Route path='/library' element={<Library/>} />
     <Route path='/settings' element={<SettingsUser/>} />
     <Route path="/profile" element={<ProfilePage />} />
     </Routes>
     <Footer/>

    </>
  );
}

export default App;
