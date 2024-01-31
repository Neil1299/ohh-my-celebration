


import React from 'react'
import wc1 from '../assets/wedding 1.jpg'
import wc2 from '../assets/wedding 2.jpg'
import wc3 from '../assets/wedding 3.jpg'
import wc4 from '../assets/wedding 4.png'
import wc5 from '../assets/wedding 5.jpg'
import wc6 from '../assets/wedding 6.jpeg'
import wc7 from '../assets/wedding 7.webp'
import wc8 from '../assets/wedding 8.avif'
import wc9 from '../assets/wedding 9.jpg'
import wc10 from '../assets/wedding 10.jpeg'
import AllElement from './AllElement'

const WeddingCakes = () => {
    const weddingCake = [
        {
            id: 1,
            image: wc1,
            itemname: "Wedding Cake with couple photo 1.5 Kgs",
            price: "Rs.950"
        },
        {
            id: 2,
            image: wc2,
            itemname: "Simple Wedding Cake 1.5 Kgs",
            price: "Rs.1500"
        },
        {
            id: 3,
            image: wc3,
            itemname: "Wedding with roses cream 2 Kgs",
            price: "Rs.800"
        },
        {
            id: 4,
            image: wc4,
            itemname: "Wedding theme Cake 3 Kgs",
            price: "Rs.2000"
        },
        {
            id: 5,
            image: wc5,
            itemname: "Wedding Cake 3 kgs",
            price: "Rs.3000"
        },
        {
            id: 6,
            image: wc6,
            itemname: "Elegant Wedding Cake 2 Kgs",
            price: "Rs.2000"
        },
        {
            id: 7,
            image: wc7,
            itemname: "Greenish Royal Wedding Cake 2 Kgs",
            price: "Rs.2000"
        },
        {
            id: 8,
            image: wc8,
            itemname: "White Wedding Cake with Roses 3 Kgs",
            price: "Rs.2700"
        },
        {
            id: 9,
            image: wc9,
            itemname: "Wedding Cake 3 kgs",
            price: "Rs.2900"
        },
        {
            id: 10,
            image: wc10,
            itemname: "Wedding Cake 2 Kgs",
            price: "Rs.1000"
        }
    ]
  return (

    <>
            <div className='text-left ms-5 my-5 me-5'>
                <p >New Added Wedding Cakes</p>
                <h3 className='bottom'>WEDDING CAKES</h3>
            </div>
            <div className="d-flex justify-content-around flex-wrap my-4">
                {
                    weddingCake.map((cake) => (
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

export default WeddingCakes

