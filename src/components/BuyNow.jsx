import React, { useContext } from 'react'
import { MyContext } from '../MyContext';

const BuyNow = () => {
  const { cart, setCart } = useContext(MyContext);   
  return (
    <div className='container-fluid min-vh-100 align-item-center text-center my-5'>
      <h3>Your Product</h3>
      <div>
        {cart.map((item)=>(
        <dir className="prodcut img">
          <img src={item.image} alt="" />
        </dir>
))}
      </div>
    </div>
  )
}

export default BuyNow
