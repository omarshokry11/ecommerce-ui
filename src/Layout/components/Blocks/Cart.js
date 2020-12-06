import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "./style/Cart.scss";
import firebase from "../../../Firebase/config.js";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        firebase.database().ref('cart/').once('value').then(response => {
            let features = [];
            response.forEach(item => {
                features.push(item.val());
            });
            setItems(features);
        }).catch((err) => console.log(err));
    }, [items]);



    return (
        <div className="cart">
            <div className="main-cart">
                {
                    items.map(item => {
                        return(
                            <>
                                <div className="product" key={item.id}>
                                    <div className="img">
                                        <Image src={item.product.img} />
                                    </div>
                                    <div className="details">
                                        <a href=" ">{item.product.link}</a>
                                        <p>{item.product.Price1}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
