import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';
import cart from '../../assests/cart.svg';
import { CartContext } from '../../contexts/cart.context';
import CartDropdowm from '../cart-dropdown/CartDropdown';
import { signOutUser } from '../../utils/firebase/firebase';
import { UserContext } from '../../contexts/user.context';
import './header.scss';

const Header = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
    <header className='header'>
      <div>
        <div className='logo-container'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo'/>
          </Link>
          <ul>
            <Link to='/'>
              Home
            </Link>
            <Link to='/products'>
              Products
            </Link>
          </ul>
        </div>
        <div className='cart'>
          {
            currentUser ?
              <ul>
                <Link to='/sign-in' onClick={signOutUser}> Sign Out</Link>
              </ul> : (
              <ul>
                <Link to='/sign-in'>
                  SignIn
                </Link>
                <Link to='/register'>
                  Register
                </Link>
              </ul>
            )
          }
          <div onClick={toggleCartOpen}>
            <img src={cart} alt='cart-svg'/>
            <span>{cartCount} items</span>
          </div>
        </div>
      </div>
    </header>
    {isCartOpen && <div>
        <div className='overlay'></div>
        <CartDropdowm />
      </div>}
    </>
  )
}

export default Header