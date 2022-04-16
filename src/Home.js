import {React, useEffect, useState} from 'react';
import Product from './Product.js';
import './Home.css';
function Home (){
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setLoading] = useState(true)
        useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProductsData(json))
      
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
      }, []);

      useEffect(() => {
          if(productsData.length !==0){
              setLoading(false);
              console.log(productsData);
          }
      }, [productsData])
    return(
        <div className='home'>
        <div className='home_container'>
            
            
            <div className='home_row'>
                {isLoading ? (
                    <h1>Loading ....</h1>
                ): (
                    productsData.map((myData) =>(
                        <Product title={myData.title} image={myData.image} price={myData.price} />
        
                    ))
                )}
            
            

            </div>
            
        </div>
        </div>

    )
}

export default Home