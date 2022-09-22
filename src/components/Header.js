import React, { useContext, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar'
import ArzuLogo from '../ArzuLogo';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
function Header() {
    const {checkItem} = useContext(CartContext)
    console.log(checkItem);


    return (
        <div className='header'>
            <Link to='/'><ArzuLogo red='Arzu ' black='optical' /></Link>
           <SearchBar/>
            
            <div className='userSide'>
                <p className='welcomMessege'> مرحبا <span className='userName'> ابراهيم محمود </span></p>
                <PersonIcon className="user_PersonIcon" />
                <Link to='/Checkout'>
                <ShoppingCartIcon className='ShoppingCartIcon_class'/>
                </Link>
                <span>{checkItem.length}</span>

            </div>
           

          

        </div>
    )
}

export default Header
