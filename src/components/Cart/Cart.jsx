import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const {cart}=props.cart;
    // const {cart}=props;

    let totalPrice = 0;
    let totalShpping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShpping = totalShpping + product.shipping;
    }
    const tex = totalPrice * 7 / 100;
    const totalGrand = totalPrice + totalShpping + tex;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price:$ {totalPrice} </p>
            <p>Total Shipping Charge:$ {totalShpping}</p>
            <p>Tax:${tex.toFixed(2)}</p>
            <h6>Grand Total:$ {totalGrand.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;