import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import { Link } from "react-router-dom";
import '../style/AddToCart.css'

const AddToCart = (props) => {
  let { id, image, itemname, price,quantity } = props;
  const { cart, setCart } = useContext(MyContext);
  const deleteCart = () => {
    let cartCopy = cart;
    cartCopy.splice(cart-1,1);
    setCart([...cartCopy]);
  };
 
  const buyNow =()=>{
    let prod = {
      id: id,
      image: image,
      itemname: itemname,
      price: price,
      quantity:quantity
    };

    setCart([...cart, prod]);
  };
  
  return (
    <div>
        <Link to="/"><button className="bottom btn ms-5 my-3"> Back to Home</button></Link>
      <div className="container min-vh-75 cart">
      
        <table class="table">
          {cart.length === 0 ? "Your cart is empty" : ""}
          <thead>
            <tr >
              {/* <th scope="col">Id</th> */}
              <th scope="col">IMAGE</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                {/* <th scope="row">{item.id}</th> */}
                <td style={{ width: "30%" }}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ height: "20%", width: "25%" }}
                  />
                </td>
                <td>{item.itemname}</td>
                <td><select name="" id="" value={item.quantity}>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  </select></td>
                <td>{item.price}</td>
  
                <td>
                  <button className="btn btn-danger" onClick={deleteCart}>
                    X
                  </button>
                  <Link to="/buynow"><button className="btn btn-success ms-2" onClick={buyNow}>Buy Now</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
            }
export default AddToCart;
