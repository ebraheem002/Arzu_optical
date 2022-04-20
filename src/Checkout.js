import { ListItemSecondaryAction } from '@mui/material';
import {React, useContext} from 'react';
import ArzuLogo from './ArzuLogo';
import CartContext from './CartContext';

function Checkout (){
    const {item} = useContext(CartContext);

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
                    <table>
                        <tr>
                            <th>اسم المادة</th>
                            <th>السعر</th>
                        </tr>
                        {item.map((items) =>(
                            <tr>
                            <td>{items.title}</td>
                            <td>5000 <span>IQD</span></td>
                        </tr>
                        

                        ))}
                        
                        </table>
                    <hr></hr>
                    <div className='theSum'>
                        <h4>المجموع : </h4>
                        <strong>52000 <span>IQD</span></strong>
                    </div>
                    <hr></hr>
                    <div className='ch_button'>
                        <input value='تأكيد الشراء' type='button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout