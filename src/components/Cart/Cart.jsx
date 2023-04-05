import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(let product of cart){ 
        
        if(product.quantity === 0){
        product.quantity = 1;
        }
        // 2. product.quantity = product.quantity || 1 ;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'><span>Clear Cart </span><FontAwesomeIcon  icon={faTrashAlt} /></button>
            {children}
        </div>
    );
};

export default Cart;

