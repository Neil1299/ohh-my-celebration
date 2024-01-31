import React, { useContext, useEffect } from 'react';
import { MyContext } from '../MyContext';

const BuyNow = () => {
  const { cart, setBuy,setCart } = useContext(MyContext);

  // Use useEffect to update the buy state when cart changes
  useEffect(() => {
    setCart.splice(cart-1)
    setBuy([...cart]);
  },[]
  );


  return (
    <div className='container-fluid min-vh-100 align-item-center text-center my-5'>
      <h3>Your Product</h3>

      <div className='d-flex'>
        {cart.map((item, index) => (
          <div key={index}>
            <div className="product img">
              <img src={item.image} alt="" />
              <h4>{item.itemname}</h4>
            </div>
            <div>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyNow;
