import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/products.context';
// import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          {/* <CategoriesProvider> */}
            <ProductProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductProvider>
          {/* </CategoriesProvider> */}
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,  
  document.getElementById('root')
);

