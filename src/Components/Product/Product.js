import React from 'react';
import { addToCart,removeFromCart } from '../Utilities/Utilities';
import './Product.css'

const Product = (props) => {
    const {id,title,price,description,category,image}=props.product;
    return (
                
            <div className='productDetails'>
                
                <h1> ID: {id}</h1> 
                <h2 className='title'>{title}</h2>
                <img className='image' src={image} alt="" />
                <p className='description'>Description: {description}</p>
                <h2>Price: ${price}</h2>
                <h2>Category: {category}</h2> 
                <button onClick={()=>addToCart(title)} className='btn'>Add To Cart</button>
                <button className='btn' onClick={()=>removeFromCart(title)}>Remove From Cart</button>
            </div>
     
    );
};

export default Product;