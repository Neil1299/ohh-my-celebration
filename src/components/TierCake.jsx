import React from 'react'
import tier1 from '../assets/tiercake1.jpeg'
import tier2 from '../assets/tiercake2.jpeg'
import tier3 from '../assets/tiercake3.jpeg'
import tier4 from '../assets/tiercake4.webp'
import tier5 from '../assets/tiercake5.avif'
import tier6 from '../assets/tiercake6.jpg'
import tier7 from '../assets/tiercake7.jpg'
import tier8 from '../assets/tiercake8.jpg'
import tier9 from '../assets/tiercake9.jpg'
import AllElement from './AllElement'


const TierCake = () => {
    const TierCake=[
        {
            id: 1,
            image: tier1,
            itemname: "Enrich Strawberry Cake Half Kg",
            price: "Rs.550"
          },
          {
            id: 2,
            image: tier2,
            itemname: "Harmony Strawberry Cake Half Kg",
            price: "Rs.570"
          },
          {
            id: 3,
            image: tier3,
            itemname: "Delectable Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 4,
            image: tier4,
            itemname: "Delightful Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 5,
            image: tier5,
            itemname: "Delish Strawberry Cake Half Kgs",
            price: "Rs.750"
          },
          {
            id: 6,
            image: tier6,
            itemname: "Exquisite Strawberry Cake Half Kgs",
            price: "Rs.750"
          },
          {
            id: 7,
            image: tier7,
            itemname: "Flavorous Strawberry Cake Half Kgs",
            price: "Rs.650"
          },
          {
            id: 8,
            image: tier8,
            itemname: "Flavoursome Strawberry Cake Half Kgs",
            price: "Rs.699"
          },
          {
            id: 9,
            image: tier9,
            itemname: "Heavenly Strawberry Cake Half Kgs",
            price: "Rs.950"
          }
    ]
  return (
    <>
    
    <div className='text-left ms-5 my-5 me-5'>
       <p >New Added Tier Cakes</p>
       <h3 className='bottom'>TIER CAKES</h3>
     </div>
     <div className="d-flex justify-content-around flex-wrap my-4">
             {
     TierCake.map((cake)=>(
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

export default TierCake
