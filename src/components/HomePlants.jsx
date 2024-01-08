

import React from 'react'
import AllElement from './AllElement'
import p1 from '../assets/indoor plant1.avif'
import p2 from '../assets/plant2.jpeg'
import p3 from '../assets/plant3.webp'
import p4 from '../assets/Boston-Fern-Plant.png'
import p5 from '../assets/green assorted plants.webp'
import p6 from '../assets/money plant.webp'
import p7 from '../assets/peace lily plant.jpeg'
import p8 from '../assets/snake plant.webp'
import p9 from '../assets/swiss cheese plant.jpeg'


const HomePlants = () => { 
    let myPlants=[
        {
            id:1,
            image:p1,
            itemname:"Indoor Green Plant",
            price:"Rs.600"
        },
        {
            id:2,
            image:p2,
            itemname:"Green Indoor Plants",
            price:"Rs.700"
        },
        {
            id:3,
            image:p3,
            itemname:"Indoor plants",
            price:"Rs.650"
        },
        {
            id:4,
            image:p4,
            itemname:" Boston Fern Indoor Plant ",
            price:"Rs.800"
        },
        {
            id:5,
            image:p5,
            itemname:"Green Assorted Plant",
            price:"Rs.650"
        },
        {
            id:6,
            image:p6,
            itemname:"Indoor Money Plant",
            price:"Rs.350"
        },  
        {
            id:7,
            image:p7,
            itemname:"Peace Lily Plant",
            price:"Rs.650"
        },
        {
            id:8,
            image:p8,
            itemname:"Air Purifying Snake Plant",
            price:"Rs.650"
        },
        {
            id:9,
            image:p9,
            itemname:"Monstera Indoor Plant",
            price:"Rs.650"
        }
    
    ]
    const plantCombo=[];
    for(let i=0;i<myPlants.length;i+=4){
        plantCombo.push(myPlants.slice(i,i+4));
    }
    return (
    <>
    <div className='text-left ms-5 my-5 me-5'>
      <p >New Added Regular Plants</p>
      <h3 className='bottom'>REGULAR PLANTS</h3>
    </div>
    
    <div id="homeplants" className="carousel slide  d-flex flex-wrap my-4">
      <div className="carousel-inner">
        {plantCombo.map((plants, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''} w-100`} key={index}>
            <div className="d-flex justify-content-around">
            {
    plants.map((plant)=>(
        <AllElement
        key={plant.id}
        image={plant.image}
        itemname={plant.itemname}
        price={plant.price}
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
        data-bs-target="#homeplants"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon " aria-hidden="false"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeplants"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
    )
    }

export default HomePlants

