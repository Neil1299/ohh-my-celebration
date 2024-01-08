import React from 'react'
import logo from '../assets/logo.avif';
import '../style/Footer.css'
const Footer = () => {
  return (
   <footer className=' footer container-fluid min-vh-75 border border-dark d-flex justify-content-center'>
     <div className='w-25 py-4'>
        <div id='logo' className='d-flex ms-5'>
    <img  src={logo} alt="" />
    <p className='my-4 fs-4'>ohh!! my <span className='text-danger fs-2 font-weight-bold '>Celebration</span></p>
 </div>
   <p className='ms-5'>Registered Address</p>
   <ul>
    <li><i class="fa-solid fa-location-dot me-2"></i>D-201 Senapati Bapat Road,High Street Complex BVB Pune 410014</li>
    <li><i class="fa-solid fa-envelope me-2"></i>order@mycelebration.com</li>
    <li><i class="fa-solid fa-phone-volume"></i>+91 2025555555</li>
   </ul>
     </div>

     <div className='w-25  ms-5 py-4'>
      <h4 className='ms-4 py-3'><u>CelebrationCakes</u></h4>
      <ul className='foot py-2'>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>DELIVERY POLICY</li>
        <li>TERMS AND CONDTIONS</li>
        <li>FAQ</li>
      </ul>
     </div>

     <div className=' foott w-25  ms-5 py-4 '>
      <h4 className='ms-4 py-3'><u>Stay Updated</u></h4>
      <ul className=' py-2'>

        <li><i class="fa-brands fa-facebook me-2"></i>Facebook</li>
        <li><i class="fa-brands fa-twitter me-2"></i>Twitter</li>
        <li> <i class="fa-brands fa-instagram me-2"></i>Instagram</li>
        
      </ul>
     </div>
     
   </footer>
  )
}

export default Footer
