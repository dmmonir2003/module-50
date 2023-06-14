import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const productAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
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
                <h4>Order Summary</h4>
                <h6>Selected Items: {cart.length}</h6>
            </div>
        </div>
    );
};

export default Shop;