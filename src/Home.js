import React from 'react';
import Product from './Product.js';
import './Home.css';
function Home (){
    return(
        <div className='home'>
        <div className='home_container'>
            <div className='home_row'>
                <Product title='نظارة جاهز بلوكت' image='https://picsum.photos/200' price={1500} />
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
        </div>

    )
}

export default Home