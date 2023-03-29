import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;