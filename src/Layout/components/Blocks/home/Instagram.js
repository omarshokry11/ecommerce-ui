import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import firebase from "../../../../Firebase/config.js";

import "../style/Instagram.scss";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      firebase.database().ref('instagram').once('value').then(response => {
        let instagram = [];
        response.forEach(item => {
          instagram.push(item.val());
        });
        setItems(instagram);
      }).catch((err) => console.log(err));
    }, [items]);

    return (
        <div className="instagram">
            <h3>@ FOLLOW US ON INSTAGRAM</h3>
            <div className="grid-container">
                {
                    items.map(item =>{
                        return(
                            <div className={item.class} key={item.id}>
                                <Image src={item.img} />
                                <div className={"details"}>
                                    <span className="heart">
                                        <i className={item.icon}></i>
                                        {item.number}
                                    </span>
                                    <p>
                                        {item.p}
                                    </p>
                                    <span>{item.span}</span>
                                </div>
                            </div>
                        )
                    })
                }
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
};
