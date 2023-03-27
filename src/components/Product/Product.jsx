import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, ratings, quantity } = props.product;
    // console.log(name)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>Name: {name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacurer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;