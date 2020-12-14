import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import firebase from "../../Firebase/config.js";

import "./style/Footer.scss";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        firebase.database().ref('footer').once('value').then(response => {
        let footer = [];
        response.forEach(item => {
            footer.push(item.val());
        });
        setItems(footer);
        }).catch((err) => console.log(err));
    }, [items]);

    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h4>GET IN TOUCH</h4>
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.p ? <p>{item.p}</p> : null}
                                        {item.class ? <div className={item.class} key={item.id}>
                                            <a href=" ">
                                                <i className={item.icon1}></i>
                                            </a>
                                            <a href=" ">
                                                <i className={item.icon2}></i>
                                            </a>
                                            <a href=" ">
                                                <i className={item.icon3}></i>
                                            </a>
                                            <a href=" ">
                                                <i className={item.icon4}></i>
                                            </a>
                                            <a href=" ">
                                                <i className={item.icon5}></i>
                                            </a>
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>CATEGORIES</h4>
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.className ? <div className={item.className} key={item.id}>
                                            {item.linkName1 ? <a href=" ">{item.linkName1}</a> : null}
                                            {item.linkName2 ? <a href=" ">{item.linkName2}</a> : null}
                                            {item.linkName3 ? <a href=" ">{item.linkName3}</a> : null}
                                            {item.linkName4 ? <a href=" ">{item.linkName4}</a> : null}
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>LINKS</h4>
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.className ? <div className={item.className} key={item.id}>
                                            {item.linkName5 ? <a href=" ">{item.linkName5}</a> : null}
                                            {item.linkName6 ? <a href=" ">{item.linkName6}</a> : null}
                                            {item.linkName7 ? <a href=" ">{item.linkName7}</a> : null}
                                            {item.linkName8 ? <a href=" ">{item.linkName8}</a> : null}
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2 col-4">
                        <h4>HELP</h4>
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.className ? <div className={item.className} key={item.id}>
                                            {item.linkName9 ? <a href=" ">{item.linkName9}</a> : null}
                                            {item.linkName10 ? <a href=" ">{item.linkName10}</a> : null}
                                            {item.linkName11 ? <a href=" ">{item.linkName11}</a> : null}
                                            {item.linkName12 ? <a href=" ">{item.linkName12}</a> : null}
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-2 col-12">
                        <h4>NEWSLETTER</h4>
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.subscribe ? <div className={item.subscribe} key={item.id}>
                                        <input placeholder="email@example.com" />
                                        <button>{item.subscribe}</button>
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 text-center paying">
                        {
                            items.map(item => {
                                return(
                                    <>
                                        {item.link ? <div className={item.link} key={item.id}>
                                            <Image src={item.img1} />
                                            <Image src={item.img2} />
                                            <Image src={item.img3} />
                                            <Image src={item.img4} />
                                            <Image src={item.img5} />
                                            <p>{item.ptitle}</p>
                                        </div> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
