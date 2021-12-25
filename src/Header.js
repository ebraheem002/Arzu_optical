import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
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
                <img className='userImg' src=''/>
                <p className='welcomMessege'>مرحبا</p>
                <p className='userName'>ابراهيم محمود</p>
            </div>
        </div>
    )
}

export default Header
