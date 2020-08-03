import React from 'react';
import { Image} from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import "./style/CarouselAlice.scss";
 
class Gallery extends React.Component {
  state = {
    galleryItems: [
        <Image src="blog.jpg" />,
        <Image src="blog.jpg" />,
        <Image src="blog.jpg" />,
        <Image src="blog.jpg" />
    ].map((i) => <h2 key={i}>{i}</h2>),
  }
 
  responsive = {
    0: { items: 2 },
    1024: { items: 4 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
 
  render() {
    return (
        <div>
            <div className="container main-alice">
                <div className="row">
                    <div className="col-12 text-center title-alice">
                        <h3>FEATURED PRODUCTS</h3>
                    </div>
                    <div className="col-12">
                    <AliceCarousel
                        items={this.state.galleryItems}
                        responsive={this.responsive}
                        autoPlayInterval={1000}
                        autoPlayDirection="ltr"
                        autoPlay={true}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        playButtonEnabled={true}
                        disableAutoPlayOnAction={true}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                    />
                    </div>
                </div>
            </div>

            <div className="shop">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-6 col-12 ab-t-l">
                            <Image src="blog.jpg" />
                            <div className="main-details">
                                <p>The Beauty</p>
                                <h3>LOOKBOOK</h3>
                                <a href=" ">VIEW COLLECTION</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 ab-t-l">
                            <Image src="banner-05.jpg" />
                            <div className="inner-details">
                                <a href=" ">Gafas sol Hawkers one</a>
                                <p>
                                    <s className="span-one">$29.50</s>
                                    <span className="span-two">$15.90</span>
                                </p>
                                <div className="timer">
                                    <p>69 <span> days </span> </p>
                                    <p>11 <span> hrs </span> </p>
                                    <p>44 <span> mins </span> </p>
                                    <p>11 <span> sec </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Gallery;