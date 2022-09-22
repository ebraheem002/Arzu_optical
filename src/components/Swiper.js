import React from 'react';
import CartContext from '../CartContext'
import '../Swiper.css'
function Swiper() {
    return (
<div className='swiper'>
        
        <ul className='mySwiper'>
            <div className='swipList '>
                <li className='listitem'><a className='listanchr' href='#'>رجالي</a></li>
            </div>
            <div className='swipList'>
                <li className='listitem'><a className='listanchr' href='#'>نسائي</a></li>
            </div>
            <div className='swipList'>
                <li className='listitem'><a className='listanchr' href='#'>اطفال</a></li>
            </div>
            <div className='swipList'>
                <li className='listitem'><a className='listanchr' href='#'>منظفات</a></li>
            </div>
            <div className='swipList'>
                <li className='listitem'><a className='listanchr' href='#'>اكسسوارات</a></li>
            </div>
            <div className='swipList'>
                <li className='listitem'><a className='listanchr' href='#'>عدسات</a></li>
            </div>
        </ul>
            
</div>
    );
}

export default Swiper