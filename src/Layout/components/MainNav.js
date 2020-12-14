import React, {useEffect, useState} from "react";
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from "./Blocks/Cart.js";

import "./style/MainNavbar.scss";
import firebase from "../../Firebase/config";

const MainNav = () => {
    const [items, setItems] = useState([]);

    const [cart, setCart]= useState(false);

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
        <>
            <Navbar expand="lg" className="nav">
                <Navbar.Brand href="/">
                    <Image src="/logo.png" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <div className="home">
                        <Link className="link" to="/">Home</Link>
                            <ul>
                                <li><Link to="/" className="nav-link">HomePage V1</Link></li>
                                <li><Link to="/" className="nav-link">HomePage V2</Link></li>
                                <li><Link to="/" className="nav-link">HomePage V3</Link></li>
                            </ul>
                        </div>
                        <Link to="/shope" className="link">Shope</Link>
                        <Link to="/shope" className="sale link">Sale</Link>
                        <Link to="/features" className="link">Features</Link>
                        <Link to="/about" className="link">About</Link>
                        <Link to="/contact" className="link">Contact</Link>
                    </Nav>
                    <div className="user-section">
                        <button className="user-btn">
                            <Link to="/login"><Image src="/icon-header-01.png" /></Link>
                        </button>
                        
                        <button className="cart-btn" onClick={() => setCart(!cart)}>
                            <Image src="/icon-header-02.png" />
                            <span className="count">{items.length}</span>
                        </button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            {cart ? <Cart /> : null}
        </>
    )
}

export default MainNav;