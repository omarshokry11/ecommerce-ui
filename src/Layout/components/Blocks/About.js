import React, { useEffect, useState } from 'react';
import { Image, Container } from "react-bootstrap";
import firebase from "../../../Firebase/config.js";

import "./style/About.scss";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        firebase.database().ref('about').once('value').then(response => {
        let about = [];
        response.forEach(item => {
            about.push(item.val());
        });
        setItems(about);
        }).catch((err) => console.log(err));
    }, [items]);

    return(
        <>
            <div className="about">
                <div className="cover">
                    <h2>About</h2>
                </div>
                <Container>
                <div class="grid-container">
                    {
                        items.map(item => {
                            return(
                                <>
                                    <div className={item.class} key={item.id}>
                                        <div className={item.className}>
                                            <Image src={item.image} />
                                        </div>
                                        {item.h3 ? <h3>{item.h3}</h3> : null}
                                        {item.p ? <p>{item.details}</p> : null}
                                        <div className={item.className}>
                                            {item.p ? <p>{item.p}</p> : null}
                                            {item.span ? <span>{item.span}</span> : null}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                </Container>
            </div>
        </>
    )
}
