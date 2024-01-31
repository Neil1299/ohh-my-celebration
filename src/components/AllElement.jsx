import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";

const AllElement = (props) => {
  let { id, image, itemname, price } = props;

  const { cart, setCart } = useContext(MyContext);
  console.log({ cart, setCart });
  const addToCart = () => {
    let prod = {
      id: id,
      image: image,
      itemname: itemname,
      price: price,
    };

    setCart([...cart, prod]);
  };

  return (
    <div className="deals container-fluid bg-light text-center w-25 ">
      <div className="ms-2 me-2 veg-item">
        <div className="vegimg " style={{ height: "200px", width: "350px" }}>
          <img src={image} alt="" style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="veg dicription py-1">
          <p className="">{itemname}</p>
        </div>
        <div className="price">
          <span className="text-danger">{price}</span>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto py-2 ">
         <Link to="#"> <button
            id="port"
            className=" btn btn-success  text-light bottom border border-light"
            onClick={addToCart}
          >
            Add To Cart
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllElement;
