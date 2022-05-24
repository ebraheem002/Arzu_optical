import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArzuLogo from './ArzuLogo';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';
function Header() {
    const {checkItem} = useContext(CartContext)
    const [qq, setQq] = useState("")
    console.log(checkItem);

    return (
        <div className='header'>
            <Link to='/'><ArzuLogo red='Arzu ' black='optical' /></Link>
           
            <div className='searchbar'>
                <input onChange={(e) =>setQq(e.target.value)} type='text' className='search_box' />
                <SearchIcon className="header_searchIcon" />
            </div>
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
