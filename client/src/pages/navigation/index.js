import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
// import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import Footer from '../../components/footer/Footer';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='header'>
        <Header />
        </div>
       <div className='outlet'>
       <Outlet />
       </div>
        <Footer />
    </div>
  )
}

export default Navigation