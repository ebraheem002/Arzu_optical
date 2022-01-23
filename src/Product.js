import React from 'react'
import './Product.css';
function Product(){
    return(
    <div className='Product'>
        <div className='product_item'>
            <p>this is a sunglass</p>
            <strong className='prod_price'>99.99$</strong>
        </div>
        <img src='https://picsum.photos/200'/>
        <button>اضافة الى السلة</button>
    </div>
    )
}

export default Product