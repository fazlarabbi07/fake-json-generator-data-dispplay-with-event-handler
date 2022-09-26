import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { getTotal } from '../Utilities/Utilities';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])
    return (
        
        <div >
            <h1>Total Products price {getTotal(products)}</h1>
        <div className='test'>
        {
        products.map(product=><Product  product={product} key={product.id}></Product>)
        }

        </div>
      
        </div>
    );
};


export  default Products;