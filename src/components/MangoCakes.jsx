import React from 'react'
import mc1 from '../assets/mango cake 1.png'
import mc2 from '../assets/mango cake 2.png'
import mc3 from '../assets/mango cake 3.jpg'
import mc4 from '../assets/mango cake 4.JPG'
import mc5 from '../assets/mango cake 5.png'
import mc6 from '../assets/mango cake 6.jpg'
import mc7 from '../assets/mango cake 7.webp'
import mc8 from '../assets/mango cake 8.webp'
import mc9 from '../assets/mango cake 9.webp'
import mc10 from '../assets/mango cake 10.jpg'
import AllElement from './AllElement'


const MangoCakes = () => {
    
  const myMangoCakes = [
    {
      id: 1,
      image: mc1,
      itemname: "Harmoney Chocolate Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 2,
      image: mc2,
      itemname: " Butterscotch Cake Half Kgs",
      price: "Rs.450",
    },
    {
      id: 3,
      image: mc3,
      itemname: "Floral Vanilla Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 4,
      image: mc4,
      itemname: "Delectable Pineapple Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 5,
      image: mc5,
      itemname: " Rose Paradise Chocolate Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 6,
      image: mc6,
      itemname: " Delicious Fudge Brownie Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 7,
      image: mc7,
      itemname: " Vday Red Velvet Treat Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 8,
      image: mc8,
      itemname: " Paradise Black Forest Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 9,
      image: mc9,
      itemname: "Mango  Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 10,
      image: mc10,
      itemname: " Rasmalai Cake Half Kgs",
      price: "Rs.350",
    },
  ];
  return (
    <>
    
    <div className="text-left ms-5 my-5 me-5">
      <p>New Added Cakes</p>
      <h3 className="bottom">Fresh Cream CAKES</h3>
    </div>
    <div className="d-flex justify-content-around flex-wrap my-4 ">
      {myMangoCakes.map((cake) => (
        <AllElement
          key={cake.id}
          id={cake.id}
          image={cake.image}
          itemname={cake.itemname}
          price={cake.price}
        />
      ))}
    </div>
  </>
  )
}

export default MangoCakes
