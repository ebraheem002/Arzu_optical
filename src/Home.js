import React from 'react';
import Product from './Product.js';
function Home (){
    return(

        <div className='home_container'>
            <div className='home_row'>
                <Product/>
                <Product/>
            </div>
            <div className='home_row'>
            <Product/>
            <Product/>
            <Product/>
            </div>
            <div className='home_row'>
            <Product/>
            <Product/>
            </div>
            
        </div>

    )
}

export default Home