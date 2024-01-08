import React from 'react'
import choco1 from '../assets/choco1.webp'
import choco2 from '../assets/choco2.webp'
import choco3 from '../assets/choco3.webp'
import choco4 from '../assets/choco4.webp'
import choco5 from '../assets/choco5.webp'
import choco6 from '../assets/cake6.avif'
import choco7 from '../assets/choco7.webp'
import choco8 from '../assets/choco8.webp'
import choco9 from '../assets/choco9.webp'
import choco10 from '../assets/choco10.webp'
import AllElement from './AllElement'


const Chocolatecakes = () => {
    const chocolateCakes=[
        {
            id: 1,
            image: choco1,
            itemname: "Fantasy Chocolate Truffle Cake Half Kgs",
            price: "Rs.350"
          },
          {
            id: 2,
            image: choco2,
            itemname: "Chocolate Truffle Cake Half Kg",
            price: "Rs.450"
          },
          {
            id: 3,
            image: choco3,
            itemname: "Half Kg Rose Paradise Chocolate Cake",
            price: "Rs.500"
          },
          {
            id: 4,
            image: choco4,
            itemname: "Enrich Chocolate Truffle Cake Half Kg",
            price: "Rs.550"
          }, {
            id: 5,
            image: choco5,
            itemname: "Lenient Chocolate Cake Half Kg",
            price: "Rs.570"
          },
          {
            id: 6,
            image: choco6,
            itemname: "Delicious Fudge Brownie Cake Half Kg",
            price: "Rs.550"
          },
          {
            id: 7,
            image: choco7,
            itemname: "Harmony Chocolate Cake Half Kg",
            price: "Rs.525"
          },
          {
            id: 8,
            image: choco8,
            itemname: "Gorgeous Chocolate Truffle Temptation Half Kg",
            price: "Rs.600"
          },
          {
            id:9,
            image: choco9,
            itemname: "Luscious Choco Chip Cake",
            price: "Rs.650"
          },
          {
            id: 10,
            image: choco10,
            itemname: "Love You Valentine Truffle Cake Half Kgs",
            price: "Rs.650"
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
     chocolateCakes.map((cake)=>(
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

export default Chocolatecakes
