
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx';
import FreshCreamCakes from './components/FreshCreamCakes.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chocolatecakes from './components/Chocolatecakes.jsx';
import StrawberryCakes from './components/StrawberryCakes.jsx';
import { MyContext } from './MyContext.js';
import { useState } from 'react';
import TierCake from './components/TierCake.jsx';
import AddToCart from './components/AddToCart.jsx';

// import AllElement from './components/AllElement.jsx';


function App() {

  const [cart, setCart] = useState([]);
  return (
   <>
  <BrowserRouter>

  <MyContext.Provider value={{cart, setCart}}>

  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/freshcream' element={<FreshCreamCakes/>}/>
    <Route path='/chocolatecakes' element={<Chocolatecakes/>}/>
    <Route path='/strawberrycakes' element={ <StrawberryCakes/>}/>
    <Route path='/tiercakes' element={<TierCake/>} />
    <Route path='/addtocart' element={<AddToCart/>} />
  </Routes>
  <Footer/>
  

  </MyContext.Provider>
  </BrowserRouter>
   
   </>
  );
}

export default App;
