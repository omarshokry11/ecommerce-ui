import React from 'react';
import { Image } from 'react-bootstrap';

import "./style/Instagram.scss";

const Instagram = () => {
    return (
        <div className="instagram">
            <h3>@ FOLLOW US ON INSTAGRAM</h3>
            <div className="grid-container">
                <div className="grid-item">
                    <Image src="instagram/gallery-1.jpg" />
                    <div className="details">
                        <span className="heart">
                            <i className="far fa-heart"></i>
                            39
                        </span>
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, 
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, 
                            ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <span>Photo by @nancyward</span>
                    </div>
                </div>
                <div className="grid-item">
                    <Image src="instagram/gallery-2.jpg" />
                     <div className="details">
                     <span className="heart">
                            <i className="far fa-heart"></i>
                            39
                        </span>
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, 
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, 
                            ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <span>Photo by @nancyward</span>
                    </div>
                </div>
                <div className="grid-item">
                    <Image src="instagram/gallery-3.jpg" />
                     <div className="details">
                     <span className="heart">
                            <i className="far fa-heart"></i>
                            39
                        </span>
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, 
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, 
                            ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <span>Photo by @nancyward</span>
                    </div>
                </div>
                <div className="grid-item">
                    <Image src="instagram/gallery-4.jpg" />
                     <div className="details">
                     <span className="heart">
                            <i className="far fa-heart"></i>
                            39
                        </span>
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, 
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, 
                            ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <span>Photo by @nancyward</span>
                    </div>
                </div>
                <div className="grid-item">
                    <Image src="instagram/gallery-5.jpg" />
                     <div className="details">
                     <span className="heart">
                            <i className="far fa-heart"></i>
                            39
                        </span>
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, 
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, 
                            ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <span>Photo by @nancyward</span>
                    </div>
                </div>
            </div>

            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-4 col-12 inner-instagram">
                        <h4>Free Delivery Worldwide</h4>
                        <a href=" ">Click here for more info</a>
                    </div>
                    <div className="col-md-4 col-12 inner-instagram item">
                        <h4>30 Days Return</h4>
                        <p>Simply return it within 30 days for an exchange</p>
                    </div>
                    <div className="col-md-4 col-12 inner-instagram">
                        <h4>Store Opening</h4>
                        <p>Shop open from Monday to Sunday</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Instagram;