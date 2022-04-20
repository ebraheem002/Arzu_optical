import React from 'react'
import { useContext } from 'react';
import  CartContext  from './CartContext';
import './Product.css';
function Product({title, image, price}){
    const { addToCart } = useContext(CartContext);
    return(
    <div className='Product'>
        
        <img src={image}/>
        <div className='product_item'>
            <p>{title}</p>
            <strong className='prod_price'>{price} دينار</strong>
        </div>
        <button>اضغط للعرض</button>

        
    </div>
    )
}

export default Product