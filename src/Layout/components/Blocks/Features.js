import React, { useState, useEffect } from 'react';
import { Image, Container } from 'react-bootstrap';
import firebase from "../../../Firebase/config.js";

import "./style/Features.scss";

function Features() {
    const [items, setItems] = useState([]);

    const loadCart = () => {
        firebase.database().ref('cart/').once('value').then(response => {
            let features = [];
            response.forEach(item => {
                features.push(item.val());
            });
            setItems(features);
        }).catch((err) => console.log(err));
    }


    useEffect(() => {
        loadCart();
    }, [items]);

    const addToCart = (product, quantity) => {
        firebase.database().ref('cart/' + product.id).set({product: product, quantity: quantity}).catch((err) => console.log(err));
    }

    return(
        <>
        <div className="features">
            <div className="cover">
                <h2>CART</h2>
            </div>
            <Container>
                <div className="table text-center">
                    <div className="header-table">
                        <div></div>
                        <div className="title">Product</div>
                        <div className="title">Price</div>
                        <div className="title">Quantity</div>
                        <div className="title">Total</div>
                    </div>
                    {
                        items.map(item => {
                            return(
                                <>
                                    <div className="main-table" key={item.product.id}>
                                        <div className="img">
                                            <Image src={item.product.img} />
                                        </div>
                                        <div className="product">
                                            <h6>{item.product.link}</h6>
                                        </div>
                                        <div className="price">
                                            <h5>{item.product.Price1}</h5>
                                            <h5>{item.product.Price2}</h5>
                                        </div>
                                        <div className="quantity">
                                            <div className="count">
                                                <span onClick={() => {
                                                    let q = item.quantity;
                                                    q === 1 ? addToCart(item.product, q) : addToCart(item.product, q - 1)
                                                }}>-</span>
                                                <span className="number">{item.quantity}</span>
                                                <span onClick={() => {
                                                    let q = item.quantity;
                                                    q = q + 1;
                                                    addToCart(item.product, q)
                                                }}>+</span>
                                            </div>
                                        </div>
                                        <div className="total">
                                            <h5>{parseFloat(item.product.Price1) * parseFloat(item.quantity)}</h5>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="footer-table">
                        <div className="item-1">
                            <input type="text" placeholder="Coupon Code" />
                        </div>
                        <div className="item-2">
                            <button>Apply Coupon</button>
                        </div>
                        <div className="item-3">
                            <button onClick={() => loadCart()}>Update Cart</button>
                        </div>
                    </div>
                </div>
                <div className="main-features">
                    <h5>Cart Totals</h5>
                    <div className="total">
                        <span className="name">Subtotal:</span>
                        <span  className="salary">$39.00</span>
                    </div>
                    <div className="shipping">
                        <div className="main-shipping">
                            <div className="name">Shipping:</div>
                            <div className="details">There are no shipping methods available. Please double check your address, or contact us if you need any help.</div>
                        </div>
                        <div className="calc">
                            <span>CALCULATE SHIPPING</span>
                            <div className="select">
                                <select>
                                    <option className="item-1">Select a country...</option>
                                    <option>US</option>
                                    <option>UK</option>
                                    <option>Japan</option>
                                </select>
                                <input type="text" placeholder="State / Country" />
                                <input type="text" placeholder="Postcode / Zip" />
                                <a href=" ">UPDATE TOTALS</a>
                                <p>
                                    <span className="span-1">TOTAL:</span>
                                    <span className="span-2">$39.00</span>
                                </p>
                                <a href=" ">Proceed To Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </Container>
        </div>
        </>
    )
}

export default Features;