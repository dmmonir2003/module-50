import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();
    // if cart data in database , you have to use async await

    // now cart data in local storage so use normal way
    const storedCart = getShoppingCart();
    const savedCart = [];

    /// if you know this loop and other work then visit Shop.jsx;
    for (const id in storedCart) {
        const addProduct = products.find(pd => pd.id === id);
        if (addProduct) {
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct);
        }
    }

    // if you need to two things (return) then use 2 option

    //op-1
    // return[savedCart,products];
    //op-2
    // return {savedCart,products};

    return savedCart;
}

export default cartProductLoader;