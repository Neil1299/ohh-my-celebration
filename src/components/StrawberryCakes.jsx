import React from 'react'
import st1 from '../assets/scake1.webp'
import st2 from '../assets/scake2.webp'
import st3 from '../assets/scake3.webp'
import st4 from '../assets/scake4.webp'
import st5 from '../assets/scake5.webp'
import st6 from '../assets/scake6.webp'
import st7 from '../assets/scake7.webp'
import st8 from '../assets/scake8.webp'
import st9 from '../assets/scake9.webp'
import AllElement from './AllElement'

const StrawberryCakes = () => {
    const StrawberryCakes=[
        {
            id: 1,
            image: st1,
            itemname: "Enrich Strawberry Cake Half Kg",
            price: "Rs.550"
          },
          {
            id: 2,
            image: st2,
            itemname: "Harmony Strawberry Cake Half Kg",
            price: "Rs.570"
          },
          {
            id: 3,
            image: st3,
            itemname: "Delectable Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 4,
            image: st4,
            itemname: "Delightful Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 5,
            image: st5,
            itemname: "Delish Strawberry Cake Half Kgs",
            price: "Rs.750"
          },
          {
            id: 6,
            image: st6,
            itemname: "Exquisite Strawberry Cake Half Kgs",
            price: "Rs.750"
          },
          {
            id: 7,
            image: st7,
            itemname: "Flavorous Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 8,
            image: st8,
            itemname: "Flavoursome Strawberry Cake Half Kgs",
            price: "Rs.699"
          },
          {
            id: 9,
            image: st9,
            itemname: "Heavenly Strawberry Cake Half Kgs",
            price: "Rs.950"
          }
    ]
  return (
    <>
    
    <div className='text-left ms-5 my-5 me-5'>
       <p >New Added Chocolate Cakes</p>
       <h3 className='bottom'>CHOCOLATE CAKES</h3>
     </div>
     <div className="d-flex justify-content-around flex-wrap my-4">
             {
     StrawberryCakes.map((cake)=>(
         <AllElement
         key={cake.id}
         image={cake.image}
         itemname={cake.itemname}
         price={cake.price}
         />
     ))
 }
             </div>
   </> 
  )
}

export default StrawberryCakes
