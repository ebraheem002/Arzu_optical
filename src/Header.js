import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <h3 className='arzu_logo'>Arzu <span className='red_op'>optical</span></h3>
            </div>
            <div className='searchbar'>
                <input type='text' className='search_box' />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className='userSide'>
                <p className='welcomMessege'> مرحبا <span className='userName'> ابراهيم محمود </span></p>
                <PersonIcon className="user_PersonIcon" />
                <ShoppingCartIcon className='ShoppingCartIcon_class'/>
            </div>
           

          

        </div>
    )
}

export default Header
