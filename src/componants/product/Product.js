import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name, price, img, seller, stock} = props.product
    return (
        <div className="pro-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
            <h3>{name}</h3>
            <h5>by : {seller}</h5>
            <p>Price: ${price}</p>
            <p> Only {stock} is left in stock. Order soon....</p>
            <button 
            className="product-bttn" 
            onClick={()=> props.productHandler(props.product)}
            
            ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>    
            </div>
        </div>
    );
};

export default Product;