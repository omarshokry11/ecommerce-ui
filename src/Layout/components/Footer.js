import React from "react";
import { Image } from "react-bootstrap";

import "./style/Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h4>GET IN TOUCH</h4>
                        <p>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="social">
                            <a href=" ">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href=" ">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href=" ">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                            <a href=" ">
                                <i className="fab fa-snapchat-ghost"></i>
                            </a>
                            <a href=" ">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>CATEGORIES</h4>
                        <div className="link">
                            <a href=" ">Men</a>
                            <a href=" ">Women</a>
                            <a href=" ">Dresses</a>
                            <a href=" ">Sunglasses</a>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>LINKS</h4>
                        <div className="link">
                            <a href=" ">Search</a>
                            <a href=" ">About Us</a>
                            <a href=" ">Contact Us</a>
                            <a href=" ">Returns</a>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>HELP</h4>
                        <div className="link">
                            <a href=" ">Track Order</a>
                            <a href=" ">Returns</a>
                            <a href=" ">Shipping</a>
                            <a href=" ">FAQs</a>
                        </div>
                    </div>

                    <div className="col-md-2 col-12">
                        <h4>NEWSLETTER</h4>
                        <input placeholder="email@example.com"></input>
                        <button>SUBSCRIBE</button>
                    </div>

                    <div className="col-12 text-center paying">
                        <div className="link">
                            <Image src="paypal.jpg" />
                            <Image src="visa.jpg" />
                            <Image src="paypal.jpg" />
                            <Image src="visa.jpg" />
                            <Image src="paypal.jpg" />
                        </div>
                        <p>Copyright © 2017 Colorlib. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;