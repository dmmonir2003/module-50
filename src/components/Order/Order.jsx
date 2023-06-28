import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import RivewItem from '../RivewItem/RivewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);

    const handelRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='rivewItem-container'>
                {
                    cart.map(product => <RivewItem
                        key={product.id}
                        product={product}
                        handelRemoveFromCart={handelRemoveFromCart}
                    ></RivewItem>)
                }

            </div>
            <div className='order-summary-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;