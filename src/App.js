import React from "react";

import TopBar from './Layout/components/TopBar';
import MainNav from './Layout/components/MainNav.js';
import MainCarousel from './Layout/components/MainCarousel.js';
import Banner from './Layout/components/Banner.js';
import CarouselAlice from './Layout/components/CarouselAlice.js';
import Offers from './Layout/components/Offers.js';
import OurBlog from './Layout/components/OurBlog.js';
import Instagram from './Layout/components/Instagram.js';
import Footer from './Layout/components/Footer.js';



class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <MainNav />
        <MainCarousel />
        <Banner />
        <CarouselAlice />
        <Offers />
        <OurBlog />
        <Instagram />
        <Footer />
      </>
    );
  }
}

export default App;
