import React, { useContext } from "react";
import CartContext from "./CartContext";
function ProductPage({title, image, price}){
    const { addToCart } = useContext(CartContext);
    const {item} = useContext(CartContext);
    return(
        <div className="product-paged-rows">
        <div className="producut-page-container" >
            <div className="side-product-page">
            <div className="add-cart-button flexabilti-purch">
                    <input  onClick={() => addToCart(title, price)} type="submit" className="add-done" value="اضافة للسلة" />
                    <input type="submit" className="save-item" value="خزن العنصر" />    
                </div>
            </div>
            <div className="side-product-page">
            
                <div className="purch-wrapper">
                <div className="text-wrapper flexabilti-purch">
                <h1 className="product-title">نظارة lacost شمسية بولورايزد</h1>
                <hr></hr>
                <tr>
                    <td>
                        <span className="IQD"> IQD</span>
                        <span className="product-page-price"> 3000 :</span>
                    </td>
                    <td>
                        <span className="price-in-number">السعر</span>
                    </td>
                </tr>
                
                </div>
                
                </div>
                <div className="the-number">
                    <span className="number-word">العدد</span>
                    <input dir="rtl" min="0" placeholder="أدخل العدد هنا" className="number-filled" type="number" />
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
                    <img className="big-imag" src="https://picsum.photos/300/500" />
                </div>
            </div>
            <div className="side-product-page">
                <div className="grid-img">
                    <div className="slide-grid">
                        <ul className="img-grid-container">
                            <li className="each-li">
                                <span className="a-declartion">
                                
                                    <div className="image-wrapper">
                                        <img  className="each-img" src="https://picsum.photos/200/300"/>
                                        
                                    </div>
                                    
                                </span>
                                
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src="https://picsum.photos/200
"/>
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src="https://picsum.photos/200
"/>
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src="https://picsum.photos/200
"/>
                                    </div>
                                </span>
                            </li>
                            <li className="each-li">
                                <span className="a-declartion">
                                    <div className="image-wrapper">
                                        <img className="each-img" src="https://picsum.photos/200
"/>
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