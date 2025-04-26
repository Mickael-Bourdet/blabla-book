import {Route,Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Navbars from './components/Navbar';
import Footer from './components/footer';


function App() {

  return (
    <>
     <Navbars/>
      <Routes>
     <Route path='/' element={<HomePage/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
