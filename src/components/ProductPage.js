import React, { useContext, useEffect, useState } from "react";
import  {collection,onSnapshot, where, query }  from 'firebase/firestore';
import db from '../firebase.js';
import { useParams } from "react-router-dom";
import CartContext from "../CartContext";
function ProductPage(){
    const { addToCart } = useContext(CartContext);
    const { addqQuantity } = useContext(CartContext);
    const { id } = useParams();
    var strIdToNum =  JSON.parse(id)
    const [loading,setLoading] = useState(true)
    const [quaqn,seqtQuan] = useState([]);
          
      useEffect(() =>{
       
        const citiesRef = collection(db,"arzu-product");

        const q =onSnapshot(query(citiesRef, where("id", "==", strIdToNum)),(snapshot) =>
        seqtQuan(snapshot.docs.map((d)=> d.data())),
        console.log(quaqn[0])
        
        )

          },[])
          useEffect(() => {
            if(quaqn.length !==0){
                setLoading(false);
                console.log(quaqn[0]);
            }
        }, [quaqn])



    return(
        <div   className="product-paged-rows">
        <div className="producut-page-container" >
            <div className="side-product-page">
            <div className="add-cart-button flexabilti-purch">
            <input  onClick={() => addToCart(quaqn[0].title,quaqn[0].price,quaqn[0].id)} type="submit" className="add-done" value="اضافة للسلة" />
                    <input type="submit" className="save-item" value="خزن العنصر" />    
                </div>
            </div>
            <div  className="side-product-page">
            
                <div className="purch-wrapper">
                <div className="text-wrapper flexabilti-purch">
                <h1  className="product-title">{! loading? quaqn[0].title :"loading"}</h1>
                <hr></hr>
                <tr>
                    <td>
                        <span className="IQD"> IQD</span>
                        <span className="product-page-price"> {! loading? quaqn[0].price :"loading"}</span>
                    </td>
                    <td>
                        <span className="price-in-number">السعر</span>
                    </td>
                </tr>
                
                </div>
                
                </div>
                <div className="the-number">
                    <span className="number-word">العدد</span>
                    <input onChange={addqQuantity} dir="rtl" min="0" placeholder="أدخل العدد هنا" className="number-filled" type="number" />
                </div>
                <div className="the-props">
                    <span className="prop-word">الخصائص</span>
                    <ul dir="rtl" className="props-list">
                       <li className="each-prop">العدسة بولورايزد تحمي من الاشعة فوق البنفسجية</li>
                       <li className="each-prop">النظارة مصنوعة من بلاستك نوعية ممتازة</li>
                       <li className="each-prop">العدسة بولورايزد تحمي من الاشعة فوق البنفسجية</li>
                       <li className="each-prop">النظارة مصنوعة من بلاستك نوعية ممتازة</li> 
                    </ul>
                </div>
            </div>
            <div className="side-product-page">
                <div className="big-image-wrapper">
                    <img className="big-imag" src={! loading? quaqn[0].image :"loading"}  />
                </div>
            </div>
            <div className="side-product-page">
                <div className="grid-img">
                    <div className="slide-grid">
                        <ul className="img-grid-container">
                            <li className="each-li">
                                <span className="a-declartion">
                                
                                    <div className="image-wrapper">
                                        <img  className="each-img" src={! loading? quaqn[0].image :"loading"} />
                                        
                                    </div>
                                    
                                </span>
                                
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img"src={! loading? quaqn[0].image :"loading"} />
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src={! loading? quaqn[0].image :"loading"} />
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src={! loading? quaqn[0].image :"loading"}/>
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src={! loading? quaqn[0].image :"loading"} />
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className="related-items">
            <div className="related-list">
                <ul>
                    <li className="related-item">
                        <a href="#">
                        <img src="https://picsum.photos/200"/>
                        <p>نظارة lacost شمسية بولورايزد</p>
                        <strong>2500 IQD</strong>
                        </a>
                    </li>
                    <li className="related-item">
                        <a href="#">
                        <img src="https://picsum.photos/200"/>
                        <p>نظارة lacost شمسية بولورايزد</p>
                        <strong>2500 IQD</strong>
                        </a>
                    </li>
                    <li className="related-item">
                        <a href="#">
                        <img src="https://picsum.photos/200"/>
                        <p>نظارة lacost شمسية بولورايزد</p>
                        <strong>2500 IQD</strong>
                        </a>
                    </li>
                    <li className="related-item">
                        <a href="#">
                        <img src="https://picsum.photos/200"/>
                        <p>نظارة lacost شمسية بولورايزد</p>
                        <strong>2500 IQD</strong>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    )
  
}

export default ProductPage