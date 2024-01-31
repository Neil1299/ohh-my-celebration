import React from "react";
import cake1 from "../assets/fruitcake.avif";
import cake2 from "../assets/pineapplecake.jpg";
import cake3 from "../assets/red velvet.jpg";
import cake4 from "../assets/black forest cake.webp";
import cake5 from "../assets/rasmalai cake.jpg";
import cake6 from "../assets/mango cake.webp";
import cake7 from "../assets/strawberry cake.webp";
import cake8 from "../assets/cheese cake.jpg";
import cake9 from "../assets/chocolate cake.jpeg";
import AllElement from "./AllElement";

const HomeCakes = () => {
  let myCakes = [
    {
      id: 1,
      image: cake1,
      itemname: "Delish Mixed Fruit Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 2,
      image: cake2,
      itemname: "Moreish Pineapple Cake Half kgs",
      price: "Rs.350",
    },
    {
      id: 3,
      image: cake3,
      itemname: "VDay Red Velvet Cake Half kgs",
      price: "Rs.650",
    },
    {
      id: 4,
      image: cake4,
      itemname: " Paradise Black Forest Kgs",
      price: "Rs.400",
    },
    {
      id: 5,
      image: cake5,
      itemname: "Royal Rasmalai Cake Half Kgs",
      price: "Rs.650",
    },
    {
      id: 6,
      image: cake6,
      itemname: "Juicy Mango Cake Half Kgs",
      price: "Rs.350",
    },
    {
      id: 7,
      image: cake7,
      itemname: " Pinky Strawberry Cake Half Kgs",
      price: "Rs.650",
    },
    {
      id: 8,
      image: cake8,
      itemname: "Cheese Cake Half Kgs",
      price: "Rs.650",
    },
    {
      id: 9,
      image: cake9,
      itemname: "Royal Rasmalai Cake Half Kgs",
      price: "Rs.650",
    },
  ];
  const cakeCombo = [];
  for (let i = 0; i < myCakes.length; i += 4) {
    cakeCombo.push(myCakes.slice(i, i + 4));
  }
  return (
    <>
      <div className="text-left ms-5 my-5 me-5">
        <p>New Added Regular Cakes</p>
        <h3 className="bottom">REGULAR CAKES</h3>
      </div>

      <div id="homecakes" className="carousel slide  d-flex flex-wrap my-4">
        <div className="carousel-inner">
          {cakeCombo.map((cakes, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""} w-100`}
              key={index}
            >
              <div className="d-flex justify-content-around">
                {cakes.map((cake) => (
                  <AllElement
                    key={cake.id}
                    image={cake.image}
                    itemname={cake.itemname}
                    price={cake.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homecakes"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="false"
          ></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homecakes"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HomeCakes;
