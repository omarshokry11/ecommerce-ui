import React, { useEffect, useState, database } from 'react';
import { Image } from "react-bootstrap";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import firebase from "../../../Firebase/config.js";

import "./style/Shope.scss";


const useStyles = makeStyles({
    root: {
      width: 200,
    },
});
  
function valuetext(value) {
    return `${value}V`;
}

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        firebase.database().ref('shope').once('value').then(response => {
            let shope = [];
            response.forEach(item => {
                shope.push(item.val());
            });
            setItems(shope);
        }).catch((err) => console.log(err));
    }, [items])

    const [value, setValue] = React.useState([20, 37]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const addToCart = (product) => {
        firebase.database().ref('cart/' + product.id).set({product: product, quantity: 1}).catch((err) => console.log(err));
    }

    return(
        <>
        <div className="shope">
            <div className="cover">
                <div className="text">
                    <h3>WOMEN</h3>
                    <p>New Arrivals Women Collection 2018</p>
                </div>
            </div>
           <div className="container padding">
               <div className="row">
                   <div className="col-md-3 col-12 main-shope">
                        <h4>Categories</h4>
                        <ul>
                            <li>All</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>Accesories</li>
                        </ul>

                       <h4 className="p-b-32">Filters</h4>
                       <div className="price">
                           <p>Price</p>
                            <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            />
                           <div className="w-size11">
                               <button>FILTER</button>
                               <span>Range: $50 - $200</span>
                           </div>
                       </div>
                       <div className="color">
                           <p>Color</p>
                           <ul>
                               <li className="filter1"></li>
                               <li className="filter2"></li>
                               <li className="filter3"></li>
                               <li className="filter4"></li>
                               <li className="filter5"></li>
                               <li className="filter6"></li>
                               <li className="filter7"></li>
                           </ul>
                           <div className="search-product">
                                <input type="text" placeholder="Search Products..." />
                                <button><i className="fa fa-search"></i></button>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-9 col-12 inner-shope">
                       <div className="select">
                            <div className="value">
                                <select>
                                    <option>Defaule Sorting</option>
                                    <option>Popularity</option>
                                    <option>Price:low to high</option>
                                    <option>Price:high to low</option>
                                </select>
                            </div>
                            <div className="price">
                                <select>
                                    <option>Price</option>
                                    <option>$0.00 - $50.00</option>
                                    <option>$50.00 - $100.00</option>
                                    <option>$100.00 - $150.00</option>
                                    <option>$150.00 - 200.00</option>
                                    <option>$200+</option>
                                </select>
                            </div>
                            <div className="paragraph">
                                <p>Showing 1–12 of 16 results</p>
                            </div>
                       </div>
                        <div className="products">
                            {
                                items.map(item => {
                                    return(
                                        <>
                                           <div className={item.class} key={item.id}>
                                                <div className="img">
                                                    <Image src={item.img} />
                                                    {item.new ? <span>{item.new}</span> : null}
                                                    {item.sale ? <span className="sale">{item.sale}</span> : null}
                                                    <div className="layout">
                                                        <button onClick={() => addToCart(item)}>{item.button}</button>
                                                        {item.icon ? <div className={item.icon}>
                                                            <i className="far fa-heart"></i>
                                                            <i className="fas fa-heart"></i>
                                                        </div> : null}
                                                    </div>
                                                </div>
                                                <div className="details">
                                                    <a href=" ">{item.link}</a>
                                                    {item.Price1 ? <p>{item.Price1}</p> : null}
                                                    {/** Desc */}
                                                    {item.price ? <p className={item.price}>
                                                        <span>{item.price1}</span>
                                                        <span  className="desc">{item.price2}</span>
                                                    </p> : null}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="pages">
                            <p>
                                <span className="page-1">1</span>
                                <span className="page-2">2</span>
                            </p>
                        </div>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
