import React from "react";

import MainCarousel from './home/MainCarousel.js';
import CarouselAlice from './home/CarouselAlice.js';
import Offers from './home/Offers';
import OurBlog from './home/OurBlog.js';
import Instagram from './home/Instagram.js';


export default () => {  
    return (
      <>
        <MainCarousel />
        <CarouselAlice />
        <Offers />
        <OurBlog />
        <Instagram />
      </>
    );
  }
  
