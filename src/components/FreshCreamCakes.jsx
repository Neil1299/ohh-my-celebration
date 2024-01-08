import React from "react";
import fc1 from "../assets/harmoney chocolate.webp";
import fc2 from "../assets/butter.webp";
import fc3 from "../assets/floral.webp";
import fc4 from "../assets/pineapple1.webp";
import fc5 from "../assets/rose paradise.webp";
import fc6 from "../assets/brownie.webp";
import fc7 from "../assets/red velvet.jpg";
import fc8 from "../assets/black forest cake.webp";
import fc9 from "../assets/mango cake.webp";
import fc10 from "../assets/rasmalai cake.jpg";
import AllElement from "./AllElement";

const FreshCreamCakes = () => {
  const myFreshCakes = [
    {
      id: 1,
      image: fc1,
      itemname: "Harmoney Chocolate Cake Half Kgs",
      price: "Rs.350"
    },
    {
        id: 2,
        image: fc2,
        itemname: " Butterscotch Cake Half Kgs",
        price: "Rs.450"
      },
      {
        id: 3,
        image: fc3,
        itemname: "Floral Vanilla Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 4,
        image: fc4,
        itemname: "Delectable Pineapple Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 5,
        image: fc5,
        itemname: " Rose Paradise Chocolate Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 6,
        image: fc6,
        itemname: " Delicious Fudge Brownie Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 7,
        image: fc7,
        itemname: " Vday Red Velvet Treat Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 8,
        image: fc8,
        itemname: " Paradise Black Forest Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 9,
        image: fc9,
        itemname: "Mango  Cake Half Kgs",
        price: "Rs.350"
      },
      {
        id: 10,
        image: fc10,
        itemname: " Rasmalai Cake Half Kgs",
        price: "Rs.350"
      }

      
  ];
  return (

    <>
    
   <div className='text-left ms-5 my-5 me-5'>
      <p >New Added  Cakes</p>
      <h3 className='bottom'>Fresh Cream CAKES</h3>
    </div>
    <div className="d-flex justify-content-around flex-wrap my-4">
            {
    myFreshCakes.map((cake)=>(
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
  ) ;
};

export default FreshCreamCakes;
