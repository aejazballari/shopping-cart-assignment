import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cartItem.scss';
const CartItem = ({CartItem}) => {
    const {addItemToCart, removeItemToCart} = useContext(CartContext)
    const {name, imageURL, description, price, stock, id, quantity} = CartItem;
    const itemQuantityPrice = price * quantity;
  return (
    <div className='cart-item'>
        <img src={imageURL} alt={name} />
        <div className='item'>
            <h2 className='item-title'>{name}</h2>
            <div className='item-details'>
                <div>
                    <span className='q-btn' onClick={() => removeItemToCart(CartItem)}>-</span>
                    <span className='quantity'>{quantity}</span>
                    <span className='q-btn' onClick={() => addItemToCart(CartItem)}>+</span>
                    <span>x</span>
                    <span className='item-price'>Rs.{price}</span>
                </div>
                <p>Rs.{itemQuantityPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default CartItem