import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;

    const productAddToCart = props.productAddToCart;
    const handleImageError = (event) => {
        event.target.style.display = 'none';
    };
    return (
        <div className='product'>
            <img src={img} alt="Out Of Sell Not Stock Avilable"
                className='img-alt' />

            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Manufacturer:${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={() => productAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;