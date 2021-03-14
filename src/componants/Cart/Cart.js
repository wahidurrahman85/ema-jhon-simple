import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
     const total = cart.reduce((total, prd) => total + prd.price,0);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
        
    // }

    let shipping = 0;

    if(total > 35){
        shipping = 0;
    } 
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tex = (total / 10);

    const grandTotal = total + shipping + tex ;



    const formatNumber = (num) => {
        const precission = num.toFixed(2)
        return Number(precission)
    }

    return (
        <div className="cart-summary">
             <h1>Order Summary</h1>
                <h4>Items Ordered: {cart.length}</h4>
                <p>Product Price: {formatNumber(total)} </p>
                <p>Shipping Cost: {formatNumber(shipping)}</p>
                <p>Tex + Vat :{formatNumber(tex)} </p>
                <p>Product Price: {formatNumber(grandTotal)} </p>
                <button className="order-review-bttn"> 
                <FontAwesomeIcon icon={faShoppingCart}/> Order Summary Review</button>
        </div>
    );
};

export default Cart;