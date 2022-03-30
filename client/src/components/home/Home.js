import React, {useContext} from 'react';
import { ProductContext } from '../../contexts/products.context';
import CategoriesList from '../categoriesList/CategoriesList';
import './home.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = () => {
  const {categories, banners, categoryMap} = useContext(ProductContext);
  console.log(categoryMap);
  return (
    <div className='home'>
        <div className='carousel'>
        <Carousel responsive={responsive}  showDots={true} infinite={true}  autoPlay={true} arrows={false}>
       
       {
            banners.map(item => {
               return   <div className='banners'>
                   <img src={item.bannerImageUrl} alt={item.bannerImageAlt}/>
                </div>
            })
        }
       
        </Carousel>
        <div className='banner-shadow'>

        </div>
        </div>
       <CategoriesList categories={categories} />
    </div>
  )
}

export default Home