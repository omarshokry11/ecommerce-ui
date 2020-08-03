import React from "react";
import { Carousel } from "react-bootstrap";

import "./style/Carousel.scss";

const MainCarousel = () => {
    return (
        <>
            <Carousel className="carousel" fade={true} touch={true} pause={'hover'} >
                <Carousel.Item className="main-carousel">
                    <img
                    className="d-block w-100"
                    src="blog-01.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="caption">
                    <div className="caption-one">
                        <p>Women Collection 2018</p>
                        <h3>NEW ARRIVALS</h3>
                        <a href=" ">SHOP NOW</a>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="main-carousel">
                    <img
                    className="d-block w-100"
                    src="blog.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="caption caption-tow">
                    <p>Women Collection 2018</p>
                    <h3>NEW ARRIVALS</h3>
                    <a href=" ">SHOP NOW</a>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className="main-carousel">
                    <img
                    className="d-block w-100"
                    src="blog-03.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="caption caption-three">
                    <p>Women Collection 2018</p>
                    <h3>NEW ARRIVALS</h3>
                    <a href=" ">SHOP NOW</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MainCarousel;