import React from "react";
import { Image } from "react-bootstrap";
import "./style/Cart.scss";

const Cart = () => {
    return (
        <div className="container-fluid cart">
            <div className="row">
                <div className="main-cart">
                    <div>
                        <div className="cover">
                            <Image src="blog.jpg" />
                            <span>X</span>
                        </div>
                        <h6>White Shirt With Pleat Detail Back</h6>
                        <p>1 X $19.00</p>
                    </div>
                    <div>
                        <div className="cover">
                            <Image src="blog.jpg" />
                            <span>X</span>
                        </div>
                        <h6>Converse All Star Hi Black Canvas</h6>
                        <p>1 X $19.00</p>
                    </div>
                    <div>
                        <div className="cover">
                            <Image src="blog.jpg" />
                            <span>X</span>
                        </div>
                        <h6>Nixon Porter Leather Watch In Tan</h6>
                        <p>1 X $19.00</p>
                    </div>
                    <div className="total">
                        <h6>Total: $75.00</h6>
                    </div>
                    <div className="link">
                        <a href=" ">VIEW CART</a>
                        <a href=" ">CHECK OUT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;