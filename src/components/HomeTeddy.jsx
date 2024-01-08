

import React from 'react'
import AllElement from './AllElement'
import t1 from '../assets/teddy1.avif'
import t2 from '../assets/teddy2.avif'
import t3 from '../assets/teddy3.jpeg'
import t4 from '../assets/teddy4.jpg'
import t5 from '../assets/teddy5.jpg'
import t6 from '../assets/teddy6.jpeg'
import t7 from '../assets/teddy7.jpeg'
import t8 from '../assets/teddy8.webp'
import t9 from '../assets/teddy9.webp'

const HomeTeddy = () => {
  let myTeddys=[
    {
        id:1,
        image:t1,
        itemname:"Teddy",
        price:"Rs.400"
    },
    {
        id:2,
        image:t2,
        itemname:"Teddy with Customized T-shirt",
        price:"Rs.800"
    },
    {
        id:3,
        image:t3,
        itemname:"Colourful Teddy with gift combo",
        price:"Rs.650"
    },
    {
        id:4,
        image:t4,
        itemname:" Teddy ",
        price:"Rs.400"
    },
    {
        id:5,
        image:t5,
        itemname:"Teddy",
        price:"Rs.650"
    },
    {
        id:6,
        image:t6,
        itemname:"Teddy",
        price:"Rs.350"
    },  {
        id:7,
        image:t7,
        itemname:"Teddy",
        price:"Rs.650"
    },
    {
        id:8,
        image:t8,
        itemname:"Teddy",
        price:"Rs.650"
    },
    {
        id:9,
        image:t9,
        itemname:"Teddy",
        price:"Rs.650"
    }

]
const teddyCombo=[];
for(let i=0;i<myTeddys.length;i+=4){
  teddyCombo.push(myTeddys.slice(i,i+4));
}
return (
<>
<div className='text-left ms-5 my-5 me-5'>
  <p >New Added Teddy</p>
  <h3 className='bottom'>REGULAR TEDDY</h3>
</div>

<div id="hometeddys" className="carousel slide  d-flex flex-wrap my-4">
  <div className="carousel-inner">
    {teddyCombo.map((teddys, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''} w-100`} key={index}>
        <div className="d-flex justify-content-around">
        {
teddys.map((teddy)=>(
    <AllElement
    key={teddy.id}
    image={teddy.image}
    itemname={teddy.itemname}
    price={teddy.price}
    />
))
}
        </div>
      </div>
    ))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#hometeddys"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon " aria-hidden="false"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#hometeddys"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
)
}

export default HomeTeddy

