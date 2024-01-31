

import React from 'react'
import fch1 from '../assets/fch combo1.png'
import fch2 from '../assets/fch combo2.webp'
import fch3 from '../assets/fch combo3.jpg'
import fch4 from '../assets/fch combo4.jpeg'
import fch5 from '../assets/fch combo5.webp'
import fch6 from '../assets/fch combo6.webp'
import fch7 from '../assets/fch combo7.png'
import fch8 from '../assets/fch combo8.jpg'
import fch9 from '../assets/fch combo9.webp'
import fch10 from '../assets/fch combo10.jpeg'
import AllElement from './AllElement'

const FlowerAndChoco = () => {
    const flowerChocolates = [
        {
            id: 1,
            image: fch1,
            itemname: "Bunch of Roses and Dark Chocolate Cake",
            price: "Rs.1000"
        },
        {
            id: 2,
            image: fch2,
            itemname: "Colourful Roses and Black Forest Cake",
            price: "Rs.1000"
        },
        {
            id: 3,
            image: fch3,
            itemname: "Heart Shaped Box Roses and mini cake",
            price: "Rs.1300"
        },
        {
            id: 4,
            image: fch4,
            itemname: "Pink Roses Bunch and Choco Delight Cake",
            price: "Rs.850"
        },
        {
            id: 5,
            image: fch5,
            itemname: "Red Roses with Kitkat and Gems Cake",
            price: "Rs.1600"
        },
        {
            id: 6,
            image: fch6,
            itemname: "Beautiful Bunch of flower with chocolate cake",
            price: "Rs.2000"
        },
        {
            id: 7,
            image: fch7,
            itemname: "Mixed roses basket and cake",
            price: "Rs.1400"
        },
        {
            id: 8,
            image: fch8,
            itemname: "Orchids Flowers and black forest cake",
            price: "Rs.2300"
        },
        {
            id: 9,
            image: fch9,
            itemname: "Box of Red Roses with Red velvet Cake",
            price: "Rs.3000"
        },
        {
            id: 10,
            image: fch10,
            itemname: "Red Roses and rose theme cake",
            price: "Rs.1200"
        }
    ]
  return (
    <>
    
            <div className='text-left ms-5 my-5 me-5'>
                <p >New Added Cake And Flowers Combo</p>
                <h3 className='bottom'>CAKE AND FLOWERS</h3>
            </div>
            <div className="d-flex justify-content-around flex-wrap my-4">
                {
                    flowerChocolates.map((cake) => (
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

export default FlowerAndChoco

