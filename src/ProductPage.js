import React from "react";
function ProductPage(){
    return(
        <div className="productContainer">
            <div className="product-info">
                <div className="productName">
                    <h3>this is a glass</h3>
                    <p>this is a good glass</p>
                </div>
                <div className="productPrice">
                    9999
                </div>
                <div className="prod-colors">
                    Colors: 
                    <div className="each-color">

                    </div>
                    <div className="each-color">
                        
                    </div>
                    <div className="each-color">
                        
                    </div>
                </div>
            </div>
            <div className="product-images">
                <div className="product-images-side">
                    <div className="product-image-div">
                    <img className="mainProdctImg" src="https://picsum.photos/id/237/200/300"/>
                    </div>
                    <div className="product-images-swiper">
                        <div className="slideimg">
                            <img className="eachImg" src="https://picsum.photos/id/237/100/200"/>
                        </div>
                        <div className="slideimg">
                            <img className="eachImg" src="https://picsum.photos/id/237/100/200"/>
                        </div>
                        <div className="slideimg">
                            <img className="eachImg" src="https://picsum.photos/id/237/100/200"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductPage