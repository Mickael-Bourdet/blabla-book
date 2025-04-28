<<<<<<< HEAD
import "./App.css";
=======
import {Route,Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home'
import Navbars from './components/Navbar';
import Footer from './components/footer';
import DetailPage from './pages/DetailsBookPage';

>>>>>>> 5e97f4021110b6acc9c77634028cafe4e8e022a5

function App() {
  return (
    <>
<<<<<<< HEAD
      <h1 className="bg-red-200">HELLO SUSHI BLABLABOOK</h1>
=======
     <Navbars/>
      <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path="/books/bookid" element={<DetailPage/>} />
     </Routes>
     <Footer/>
>>>>>>> 5e97f4021110b6acc9c77634028cafe4e8e022a5
    </>
  );
}

export default App;
