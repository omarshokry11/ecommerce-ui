import React from 'react';
import { Image } from 'react-bootstrap';

import "./style/Instagram.scss";

const Instagram = () => {
    return (
        <div className="instagram">
            <div className="title">
                <h3>@ FOLLOW US ON INSTAGRAM</h3>
            </div>

            <div className="main-instagram">
                <div className="inner-instagram">
                    <Image src="blog.jpg" />
                    <div className="det">
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo,
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.
                            Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <h6>Photo by @nancyward</h6>
                    </div>
                </div>
                <div className="inner-instagram">
                    <Image src="blog.jpg" />
                    <div className="det">
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo,
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.
                            Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <h6>Photo by @nancyward</h6>
                    </div>
                </div>
                <div className="inner-instagram">
                    <Image src="blog.jpg" />
                    <div className="det">
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo,
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.
                            Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <h6>Photo by @nancyward</h6>
                    </div>
                </div>
                <div className="inner-instagram">
                    <Image src="blog.jpg" />
                    <div className="det">
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo,
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.
                            Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <h6>Photo by @nancyward</h6>
                    </div>
                </div>
                <div className="inner-instagram">
                    <Image src="blog.jpg" />
                    <div className="det">
                        <p>
                            Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo,
                            eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.
                            Ut sit amet enim orci. Nam eget metus elit.
                        </p>
                        <h6>Photo by @nancyward</h6>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-4">
                        <h4>Free Delivery Worldwide</h4>
                        <a href=" ">Click here for more info</a>
                    </div>
                    <div className="col-4 bo2">
                        <h4>30 Days Return</h4>
                        <p>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className="col-4">
                        <h4>Store Opening</h4>
                        <p>Shop open from Monday to Sunday</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Instagram;