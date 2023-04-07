import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt);
    const {picture, name, price}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name :{name}</h4>
            <p>Price :{price}</p>
            <button onClick={() =>handleAddToCart(tshirt)}>Bye New</button>
        </div>
    );
};

export default TShirt;