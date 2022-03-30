import React, {useContext} from 'react';
import { CartContext } from '../../contexts/cart.context'; 
import './productCard.scss';

const ProductCard = ({products}) => {
    const {addItemToCart} = useContext(CartContext);
  return (<div className='products'>
    {
        products.map(item => {
            const {name, imageURL, description, price, id} = item;
            const slicedDecription = description.slice(0, 130);
            return <div key={id} className='product'>
            <h3>{name}</h3>
            <div className='product-content'>
                <div className='img-container'>
                    <img src={imageURL} alt="image" />
                </div>
                <div className='content-container'>
                    <p>{slicedDecription}</p>
                    <button onClick={() => addItemToCart(item)}>Buy Now @ MRP Rs.{price}</button>
                </div>
            </div>
            <button className='ipad-btn' onClick={() => addItemToCart(item)}>Buy Now @ MRP Rs.{price}</button>
        </div>
        })
    }
  </div>
  )
}

export default ProductCard