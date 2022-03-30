import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cartDropdown.scss';
import Button from '../button';
import CartItem from '../cart-item/CartItem';
import LowestPrice from '../../assests/lowest-price.png'

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
    <div className='cart-dropdown-container'>
        {/* <div className='cart-items'> */}

          {
            cartItems.length ? <div className='cart-items'>
            <div className='cart-header'>
              <h3>My Cart <span>({cartItems.length} items)</span></h3>
              <span className='close'>x</span>
            </div>
            {
              cartItems.map(item => <CartItem key={item.id} CartItem={item}/>)
              
            }
             <div className='img-container'>
          <img src={LowestPrice} alt='lowest-price'/>
          <span>You won't find it cheaper anywhere</span>
          </div>
          </div> : <div className='empty'>
             <div>
             <h3>No Items in your cart</h3>
              <p>Your favourite items are just click away</p>
             </div>
          </div>
          }
         
        <div className='btn-container'>
        {
          cartItems.length > 0 && <p>Promo code can be applied on the payment page</p>
        }
        <Button> {cartItems.length ? `Proceed to checkout Rs.${cartTotal}` : 'Start Shopping'}</Button>
        </div>
        {/* </div> */}
    </div>
    </>
  )
}

export default CartDropdown