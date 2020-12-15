import React, {useState, useEffect} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import firebase from "../../../../Firebase/config.js";

import "../style/CarouselAlice.scss";

export default () => {
    const [items, setItems] = useState([]);

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 3},
        1024: {items: 4},
    };

    useEffect(() => {
        firebase.database().ref('CarouselAlice').once('value').then(response => {
            let carousel = [];
            response.forEach(item => {
                carousel.push(item.val());
            });
            setItems(carousel);
        }).catch((err) => console.log(err));
    }, []);

    return (
        <div className="products-carousel-section" style={{width: '85%', margin: 'auto', textAlign: 'center'}}>
            <h1>Feature Products</h1>
            <AliceCarousel
                autoPlay
                activeIndex={0}
                infinite={true}
                responsive={responsive}
                autoPlayInterval={1000}
                fadeOutAnimation={false}
                dotsDisabled={true}
                touchTrackingEnabled={true}
                mouseTrackingEnabled={true}
            >
                {items.map(item => <div className="item" key={item.id}>
                    <div className={item.class}>
                        <img className="w-100" src={item.img} alt=""/>
                        <a href="/" className="add-btn">
                            add to cart
                        </a>
                    </div>
                    <div className={item.classLink}>
                        <a href="/">{item.linkName}</a>
                        <div>
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>)}
            </AliceCarousel>
        </div>
    );
}