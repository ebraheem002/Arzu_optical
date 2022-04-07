import React from 'react';
import ArzuLogo from './ArzuLogo';
function Checkout (){
    return(
        <div  dir="rtl" className="checkout">
            <div className="checkout-left">
                <div className="Product-check">
                    <div className='BillBg'>
                    <ArzuLogo red='Arzu' black='optical' />
                    <div className='contact_info'>
                        <p>07703559750</p>
                        <p>07701688388</p>
                    </div>
                    </div>
                    <div className='customerName'>
                        <p> حضرة السيد:   <span> ابوحسن </span> </p>
                        <p> العنوان:<span> الجامعة</span> </p>
                    </div>
                    <hr></hr>
                    <ul className="Ul-check">
                        <li className="li-check">
                            <a>
                            <span className='title-check'> نظارة شمسية وايفيرر كلاسيكية - مقاس العدسة: 54 مم 

                            </span>
                            <strong className='price'>2500 IQD</strong>
                            </a>
                        </li>
                    </ul>
                    <div className='ch_button'>
                        <input value='تأكيد الشراء' type='button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout