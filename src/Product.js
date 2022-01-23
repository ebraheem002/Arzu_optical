import React from 'react'
import './Product.css';
function Product({title, image, price}){
    return(
    <div className='Product'>
        <div className='product_item'>
            <p>{title}</p>
            <strong className='prod_price'>{price} دينار</strong>
        </div>
        <img src={image}/>
        <button>اضافة الى عربة التسوق</button>
    </div>
    )
}

export default Product