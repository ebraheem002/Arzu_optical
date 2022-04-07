import React from 'react'
import './ArzuLogo.css';
function ArzuLogo({red, black, white}){
    return( 
    <div className='header_logo'>
        <h3 className='arzu_logo'>{red} <span className='red_op'>{black}</span></h3>
    </div> 
    )
}

export default ArzuLogo