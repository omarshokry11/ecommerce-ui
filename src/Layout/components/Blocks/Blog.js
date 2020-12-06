import React, { useEffect, useState } from 'react';
import {Image} from 'react-bootstrap';
import firebase from "../../../Firebase/config.js"

import './style/Blog.scss';

export default () => {
    const [blogs, setBlogs] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        firebase.database().ref('blog').once('value').then(response => {
            let blog = [];
            response.forEach(item => {
                blog.push(item.val());
            });
            setBlogs(blog);
        })
        .catch((err) => console.log(err));

        // load products
        firebase.database().ref('CarouselAlice').once('value').then(response => {
            let products = [];
            response.forEach(item => {
                products.push(item.val());
            });
            setProducts(products);
        })
        .catch((err) => console.log(err));

    }, [blogs, products]);

    return(
        <>
        <div className="blog">
            <div className="cover">
                <h2 className="title">Blog</h2>
            </div>
            <div className="container-fluid blog-content">
                <div className="row">
                    <div className="col-md-8 col-12 main-blog">
                        {
                            blogs?.map(item => {
                                return(
                                    <>
                                        <div className={item.class} key={item.id}>
                                            <div className="img">
                                                {item.img ? <Image src={item.img} /> : null}
                                                {item.p ? <p>{item.p}</p> : null}
                                            </div>
                                            <div className="details">
                                            <h3 className="link"><a href=" ">{item.link}</a></h3>
                                            {item.span ? <span>{item.span}</span> : null}
                                            {item.p ? <p>{item.pDetails}</p> : null}
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    
                    <div className="col-md-4 col-12 inner-blog">
                        <div className="input">
                            <input placeholder="search" />
                        </div>
                        <h5>Categories</h5>
                        <div className="dropdown-divider"></div>
                        <p className="desc">Fashion</p>
                        <div className="dropdown-divider"></div>
                        <p className="desc">Beauty</p>
                        <div className="dropdown-divider"></div>
                        <p className="desc">Street Style</p>
                        <div className="dropdown-divider"></div>
                        <p className="desc">Life Style</p>
                        <div className="dropdown-divider"></div>
                        <p className="desc">DIY & Crafts</p>
                        <div className="dropdown-divider"></div>
                        <h5>Featured Products</h5>
                        <div className="product-item">
                                {
                                    products?.map((product, id) => {
                                        return <div key={id} className="item">
                                            <div style={{backgroundImage: `url(${product.img})`}} className="img"></div>
                                            <p className="details">
                                                <span>White Shirt With Pleat Detail Back</span>
                                                <label>$19.00</label>
                                            </p>
                                        </div>
                                    })
                                }
                        </div>
                        <h5>Archive</h5>
                        <div className="archive">
                            <p className="desc">
                                <a href=" ">July 2020</a>
                                <span>(9)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">June 2020</a>
                                <span>(39)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">May 2020</a>
                                <span>(29)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">April 2020</a>
                                <span>(35)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">March 2020</a>
                                <span>(22)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">February 2020</a>
                                <span>(32)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">Junuary 2020</a>
                                <span>(21)</span>
                            </p>
                            <p className="desc">
                                <a href=" ">December 2020</a>
                                <span>(26)</span>
                            </p>
                        </div>
                        <h5>Tags</h5>
                        <div className="tags">
                            <button>Fashion</button>
                            <button>Life Style</button>
                            <button>Denim</button>
                            <button>Street Style</button>
                            <button>Crafts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
