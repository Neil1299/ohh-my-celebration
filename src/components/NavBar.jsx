import React, { useContext } from 'react'
import NavTop from './NavTop'
import NavMiddle from './NavMiddle'
import NavBot from './NavBot'
import { MyContext } from '../MyContext'


const NavBar = () => {

  const {addToCart, setAddToCart} = useContext(MyContext);


  return (
    <>
    <NavTop/>
    <NavMiddle/>
    <NavBot/>
    
    </>
  )
}

export default NavBar
