import {Route,Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Navbars from './components/Navbar';
import Footer from './components/footer';
import DetailPage from './pages/DetailsBookPage';


function App() {

  return (
    <>
     <Navbars/>
      <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path="/books/bookid" element={<DetailPage/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
