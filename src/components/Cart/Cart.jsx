import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    // console.log(cart);
    let message;
    if(cart.length === 0){
        message = <p>Please add some Product</p>
    }
    else{
       message= <div>
            <h2>boroloxxxx</h2>
        </div>
    }
    
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'green'}>Order Summary: {cart.length}</h2>
            {cart.length >2 ? <span className='orange'>aro kino miya </span> : <span>fokir naki</span> }
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt. _id}
                    >{tshirt.name} <button 
                    onClick={()=>handleRemoveCart(tshirt._id)}
                    >X</button></p> )
            }
            {cart.length ===2 && <p>Double koro</p> }
            {cart.length ===3 ||  <h2>thinta to hoilo na</h2> }
        </div>
    );
};

export default Cart;