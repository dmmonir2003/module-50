import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //  option -1 data available

    // useEffect(() => {
    //     const storedCarted = getShoppingCart();
    //     // stap =1;get id
    //     for (const id in storedCarted) {
    //         // stap=2; find product by id use find loop
    //         const addProduct = products.find(product => product.id === id);
    //         // stap=3;get quanty by id;
    //         const quatity = storedCarted[id];
    //         // stap=4 ;set quantity addproduct;
    //         addProduct.quantity = quatity
    //         console.log(quatity, id);
    //         console.log(addProduct);

    //     }
    // }, [products])

    //   option 2= data  not available

    useEffect(() => {

        const storedCarted = getShoppingCart();
        const savedCart = [];
        //stap=1 ;get id from local storge
        for (const id in storedCarted) {
            //stap=2; get product by id use find loop
            const addProduct = products.find((product) => product.id === id);

            if (addProduct) {
                // get uantity localStorge use id
                const quantity = storedCarted[id];
                // stap=3; add quantity product
                addProduct.quantity = quantity;
                // stap=4; savedcart emty array push product
                savedCart.push(addProduct);
            } else {
                console.log(`Product with id ${id} not found in the products array.`);
            }
        }

        // stap=5;  emty arry set useStae setCart function
        setCart(savedCart);

    }, [products]);


    const productAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        productAddToCart={productAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-summary-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;