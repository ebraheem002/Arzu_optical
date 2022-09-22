import React from 'react'
import { useEffect, useState} from 'react';
import Product from './Product.js';
import { ValidApi } from '../CartContext.js';
import { isLoading } from '../CartContext.js';

import '../Home.css';

function Home (){
        const {productsData} = ValidApi();

        

    return(
        <div className='home'>
        <div className='home_container'>
            
        <button ></button>

            <div className='home_row'>
                    {productsData.map((myData) =>(

                        <Product key={myData.id} id={myData.id} title={myData.title} image={myData.image} price={myData.price} />
        
                    ))}
                )
            
            

            </div>
            
        </div>
        </div>

    )
}

export default Home