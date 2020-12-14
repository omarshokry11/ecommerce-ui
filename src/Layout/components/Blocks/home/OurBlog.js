import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import firebase from "../../../../Firebase/config.js";

import "../style/OurBlog.scss";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      firebase.database().ref('ourblog').once('value').then(response => {
        let ourblog = [];
        response.forEach(item => {
          ourblog.push(item.val());
        });
        setItems(ourblog);
      }).catch((err) => console.log(err));
    }, [items]);

    return (
        <div className="container blog">
            <div className="row">
                <div className="col-12 text-center title">
                    <h3>OUR BLOG</h3>
                </div>
                {
                    items.map(item =>{
                        return(                       
                            <div className="inner-blog col-md-4 col-12" key={item.id}>
                                <div className="img">
                                    <Image src={item.img} />
                                </div>
                                <a href=" ">{item.linkTitle}</a>
                                <h6>{item.h6}</h6>
                                <p>{item.p}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
