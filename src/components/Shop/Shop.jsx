import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = []
        // step 1; get id of the addedProduct
        for(const id in storedCart){
            // console.log(storedCart)
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){
                // step 3: add quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the addedProduct to the saved cart
                savedCart.push(addedProduct)
            }
        }
        // step 5: set the cart 
        setCart(savedCart)
    },[products])

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} 
                        handleAddToCard={handleAddToCard}></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
                    
                </div>
        </div>
    );
};

export default Shop;