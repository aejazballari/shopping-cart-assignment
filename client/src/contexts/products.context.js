import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
    products: [],
    categories: [],
    banner: [],
});

 export const ProductProvider = ({children}) => {
     const [products, setProducts] = useState([]);
     const [categories, setCategories] = useState([]);
     const [banners, setBanners] = useState([]);
     const [categoryProducts, setCategoryProducts] = useState([]);
     const [categoryName, setCategoryName] = useState('');
     useEffect(() => {
        const fetchProducts = () => {
            fetch('http://localhost:4000/products').then(res => res.json()).then(res=> setProducts(res))
          };
          fetchProducts();
     }, []);

     useEffect(() => {
        const fetchBanners = () => {
            fetch('http://localhost:4000/banners').then(res => res.json()).then(res=> setBanners(res))
          };
          fetchBanners();
     }, []);

     useEffect(() => {
         const fetchCategories = () => {
            fetch('http://localhost:4000/categories').then(res => res.json()).then(res=> {
                const newCategories = res.sort((a, b) => {
                    return a.order - b.order
                  }
                  ).filter(item => item.order>0)
                 setCategories(newCategories);
            } )
        };
        fetchCategories();
     }, []);

     const getProductsByCategory = (categoryId, name) => {
        const categoryProducts = products.filter(product => product.category === categoryId);
        setCategoryProducts(categoryProducts);
        setCategoryName(name)
     }

    //  const categoryMap = categories.reduce((acc, item) => {
    //     const {name, id} = item;
    //     const categoryProducts = products.filter(product => product.id === id);
    //     acc[name.toLowerCase()] = categoryProducts;
    //     return acc
    //  }, {});
     const value = {categories, banners, products, getProductsByCategory, categoryProducts, categoryName}; 
     return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
 };