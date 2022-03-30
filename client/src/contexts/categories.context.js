import {createContext, useState, useEffect} from 'react';

export const CategoriesContext = createContext({
    categories: [],
});

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = () => {
            fetch('http://localhost:4000/categories').then(res => res.json()).then(res=> setCategories(res))
          };
          fetchCategories();
    },[]);
    const value = {
        categories,
    }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}