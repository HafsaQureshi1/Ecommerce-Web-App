// Cart.js
import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
<>
<br /> <br />
<div className="container mt-5">
      <div className="row">
      <div className="my-3 col-lg-3 fw-bold ">Product </div>
            <div className="my-3 col-lg-3 fw-bold">Price </div>
            <div className="my-3 col-lg-3 fw-bold">Quantity</div>
            <div className="my-3 col-lg-3 fw-bold">Subtotal </div>
            </div>
         
      {cart.map((item) => (
        <div key={item.id}>
          <p>
          <div   className='row'>
            <div className="col-lg-3 my-3">{item.name} </div>
          
            <div className="col-lg-3 my-3">${item.price * item.quantity}</div>
            <div className="col-lg-3 my-3">Quantity: {item.quantity} </div>
            <div className="col-lg-3 my-3">${item.price * item.quantity}</div>
            
            </div></p>
        </div>
      ))}
      <p>Total: ${calculateTotal()}</p>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12 my-5"><button style={{width:'250px' ,border: '2px solid #000'}} className='btn'>Return to shop</button></div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-5"><button style={{width:'250px' ,border: '2px solid #000'}}  className='btn '>Update Cart</button></div>
        </div>
    </div>
    <div className="container mt-4">
      <div className="row">
        {/* Input field column */}
        <div className="col-lg-3 mb-3 ">
          <input
            style={{ width: '95%' }}
            className='form-control'
            type="text"
            placeholder="Coupon code"
          />
        </div>

        {/* Button column */}
        <div className="col-lg-9 mb-3">
          <button style={{width:'200px'}} className='gradient btn text-light' type="submit">Apply Coupon</button>
        </div>
      </div>
    </div>
    <div className="container-fluid  mb-5">
    <div className="row">    
    <div className="col-lg-6 col-md-6 col-sm-12">
    </div>
    <div style={{border:'3px solid #000'}} className=" col-lg-6 col-md-6 col-sm-12">
    <h3 className='mx-4 my-5'>Cart Total</h3>
    <div className="mx-3 row">    
    <div className="col-lg-8 col-md-6 col-sm-12">
        Subtotal
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <p>${calculateTotal()}</p>
        
    </div>
    </div>
    <hr />
    <div className="mx-3 row">    
    <div  className=" col-lg-8 col-md-6 col-sm-12">
        Shipping
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <p>free</p>
        
    </div>
    </div>
    <hr />
    <div className="mx-3   row">    
    <div className="col-lg-8 col-md-6 col-sm-12">
        Total
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">
        <p>${calculateTotal()}</p>
        
    </div>
    </div>
    <button style={{width:'350px'}} className='mx-5 my-4 justify-content-center text-center gradient btn btn-lg text-light'>Process to checkout</button>
    </div></div></div>

</>  );
}
