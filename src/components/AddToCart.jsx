import React, {useContext} from 'react'
import { MyContext } from '../MyContext';



const AddToCart = () => {
  const deleteCart = () =>{
    let cartCopy = cart;
    cartCopy.splice((cart-1),1);
    setCart([...cartCopy]);
  
  }
  const {cart, setCart} = useContext(MyContext);
  return (
    <div>
      
    (<div className='container '>
           <table class="table">
           {
                        (cart.length == 0)? "Your cart is empty":""
                        
                    }
  <thead>
    <tr>
      {/* <th scope="col">Id</th> */}
      <th scope="col">IMAGE</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {
      cart.map(
        item => (
          <tr>
          {/* <th scope="row">{item.id}</th> */}
          <td style={{width:"30%"}}><img src={item.image} alt="" style={{height:"20%",width:"25%"}} /></td>
          <td>{item.itemname}</td>
          <td>{item.price}</td>
          <td><button className='btn btn-danger' onClick={deleteCart}>X</button></td>
        </tr>
        )
      )
    }

  </tbody>
</table>
          </div>)
           
      
    </div>
  )
}

export default AddToCart
