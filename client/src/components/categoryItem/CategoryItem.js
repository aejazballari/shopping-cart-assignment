import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ProductContext } from '../../contexts/products.context';
import './categoryItem.scss';

const CategoryItem = ({category}) => {
  const {getProductsByCategory} = useContext(ProductContext);
  const {imageUrl, name, description, key, id} = category;

  return (<div className='category-container'>
    <div className='category'>
        <img src={imageUrl}/>
        <div className='content'>
            <h4>{name}</h4>
            <p>{description}</p>
            <Link to='/products'>
              <button onClick={() => getProductsByCategory(id, name)}>{key}</button>
            </Link>
        </div>
    </div>
    <div className='shadow'>

    </div>
  </div>
  )
}

export default CategoryItem