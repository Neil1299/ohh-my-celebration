import React from "react";
import AllElement from "./AllElement";
import f1 from "../assets/flower1.jpeg";
import f2 from "../assets/flower2.webp";
import f3 from "../assets/flower3.webp";
import f4 from "../assets/flower4.webp";
import f5 from "../assets/flower5.webp";
import f6 from "../assets/flower6.webp";
import f7 from "../assets/flower8.webp";
import f8 from "../assets/flower8.webp";
import f9 from "../assets/flower9.webp";
import f10 from "../assets/flower10.webp";
import f11 from "../assets/flower11.webp";

const HomeFlowers = () => {
    const myFlowers = [
        {
          id: 1,
          image: f1,
          itemname: "Bunch of Flowers",
          price: "Rs.550",
        },
        {
          id: 2,
          image: f2,
          itemname: "Bunch of Flowers",
          price: "Rs.750",
        },
        {
          id: 3,
          image: f3,
          itemname: "Bunch of Flowers",
          price: "Rs.650",
        },
        {
          id: 4,
          image: f4,
          itemname: "Bunch of Flowers",
          price: "Rs.450",
        },
        {
          id: 5,
          image: f5,
          itemname: "Bunch of Flowers",
          price: "Rs.700",
        },
        {
          id: 6,
          image: f6,
          itemname: "Bunch of Flowers",
          price: "Rs.850",
        },
        {
          id: 7,
          image: f7,
          itemname: "Bunch of Flowers",
          price: "Rs.800",
        },
        {
          id: 8,
          image: f8,
          itemname: "Bunch of Flowers",
          price: "Rs.650",
        },
        {
          id: 9,
          image: f9,
          itemname: "Bunch of Flowers",
          price: "Rs.550",
        },
        {
          id: 10,
          image: f10,
          itemname: "Bunch of Flowers",
          price: "Rs.550",
        },
        {
          id: 11,
          image: f11,
          itemname: "Bunch of Flowers",
          price: "Rs.590",
        },
      ];

  const flowerCombos = [];
  for (let i = 0; i < myFlowers.length; i += 4) {
    flowerCombos.push(myFlowers.slice(i, i + 4));
  }

  return (
    <>
      <div className="text-left ms-5 my-5 me-5">
        <p>New Added Flowers</p>
        <h3 className="bottom">BEAUTIFUL FLOWERS</h3>
      </div>
      <div id="homeflowers" className="carousel slide ">
        <div className="carousel-inner">
          {flowerCombos.map((flowers, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""} w-100`}
              key={index}
            >
              <div className="d-flex justify-content-around">
                {flowers.map((flower) => (
                  <AllElement
                    key={flower.id}
                    image={flower.image}
                    itemname={flower.itemname}
                    price={flower.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeflowers"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeflowers"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HomeFlowers;
