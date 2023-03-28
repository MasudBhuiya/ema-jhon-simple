import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const { name, img, seller, price, ratings} = props.product;
    const handleAddToCard = props.handleAddToCard;


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
            <button className='btn-cart'onClick={()=>handleAddToCard(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;