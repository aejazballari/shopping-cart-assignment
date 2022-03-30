import React, {useContext, useState} from 'react';
import Button from '../../components/button';
import ProductCard from '../../components/productCard';
// import { CategoriesContext } from '../../contexts/categories.context';
import { ProductContext } from '../../contexts/products.context';
import './products.scss'

function Products() {
    const {products, categories, getProductsByCategory, categoryProducts, categoryName} = useContext(ProductContext);
    console.log(categoryName);
  return (
    <div className='products-page'>
        <ul>
            {
                categories.map(item => {
                    return <li key={item.id} onClick={() => getProductsByCategory(item.id, item.name)}>
                        {item.name}
                    </li>
                })
            }
        </ul>
        <div className='category-name'><Button>{categoryName}</Button></div>
        <ProductCard products={categoryProducts.length ? categoryProducts : products} />
    </div>
  )
}

export default Products