
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx';
import FreshCreamCakes from './components/FreshCreamCakes.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chocolatecakes from './components/Chocolatecakes.jsx';
import StrawberryCakes from './components/StrawberryCakes.jsx';
// import AllElement from './components/AllElement.jsx';


function App() {
  return (
   <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/freshcream' element={<FreshCreamCakes/>}/>
    <Route path='/chocolatecakes' element={<Chocolatecakes/>}/>
    <Route path='/strawberrycakes' element={ <StrawberryCakes/>}/>
  </Routes>
  <Footer/>
 
  </BrowserRouter>
   
   </>
  );
}

export default App;
