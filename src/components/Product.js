import React from 'react'
import { useContext } from 'react';
import  CartContext  from '../CartContext';
import { Link } from 'react-router-dom';
import '../Product.css';
function Product({title, image, price,id}){
    const { addToCart } = useContext(CartContext);
    return(
        

    <div key={id} className='Product'>
        <img className='product-img' src={image}/>
        <div className='product_item'>
            <p className='product-paragraph'>{title}</p>
            <strong className='prod_price'>{price} دينار</strong>
        </div>
        <Link to={`/ProductPage/${id}`}>
        <button  className='product-button'>اضغط للعرض</button>
        </Link>
    </div>

    )
}

export default Product