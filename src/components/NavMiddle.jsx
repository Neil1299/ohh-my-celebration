import React from 'react'
import logo from '../assets/logo.avif';
import '../style/NavMid.css'
const NavMiddle = () => {
  return (
    <nav className='navbar navbar-expand-lg   justify-content-between  d-flex '>
<div id='logo' className='d-flex ms-5'>
    <img  src={logo} alt="" />
    <p className='my-4 fs-4'>ohh!! my <span className='text-danger fs-2 font-weight-bold '>Celebration</span></p>
 </div>
 <div className='me-5'> 
    <ul classNameName=''>
        <li><i className="fa-solid fa-phone-volume fs-3 "></i><span className='ms-2  fs-3'> Order Now</span><span className='order ms-2 fs-5'>+91 2025555555</span></li>
        <li><i className="fa-solid fa-map-location-dot fs-3"></i><span className='order ms-2 fs-3'>ORDER STATUS</span></li>
    </ul>
 </div>


</nav>
  )
}

export default NavMiddle
