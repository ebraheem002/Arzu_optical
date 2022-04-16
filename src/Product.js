import React from 'react'
import './Product.css';
function Product({title, image, price}){
    
    return(
    <div className='Product'>
        
        <img src={image}/>
        <div className='product_item'>
            <p>{title}</p>
            <strong className='prod_price'>{price} دينار</strong>
        </div>
        <button>شراء ألان</button>

        
    </div>
    )
}

export default Product