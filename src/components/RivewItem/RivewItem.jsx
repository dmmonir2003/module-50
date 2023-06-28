import React from 'react';
import './RivewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const RivewItem = ({ product, handelRemoveFromCart }) => {
    const { id, name, img, price, quantity, shipping } = product;
    return (
        <div className='revewItem'>
            <img src={img} alt="" />
            <div className='rivew-details'>
                <h5 className='title'>{name}</h5>
                <p>Price: <span className='font-color'>${price}</span></p>
                <p> Order Quantity: <span className='font-color'>{quantity}</span></p>
            </div>
            <button onClick={() => handelRemoveFromCart(id)} className='delete-btn'> <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default RivewItem;