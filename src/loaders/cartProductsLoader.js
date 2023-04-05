import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    const savedCart = [];
    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    for(const id in storedCart){
        const addedProduct = products.find(product=>product.id === id);
        // console.log(addedProduct);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    console.log(savedCart);
    return savedCart;
}

export default cartProductsLoader;