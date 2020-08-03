import React from "react";
import { Navbar, Nav, Image } from 'react-bootstrap';
import Cart from "./Blocks/Cart.js";


//
import "./style/MainNavbar.scss";

const MainNav = () => {
    return (
        <>
            <Navbar expand="lg" className="nav">
                <Navbar.Brand href="#home">
                    <Image src="logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href=" " className="home">
                        <a href=" "> Home </a>
                            <ul>
                                <li><a href=" ">HomePage V1</a></li>
                                <li><a href=" ">HomePage V2</a></li>
                                <li><a href=" ">HomePage V3</a></li>
                            </ul>
                        </Nav.Link>
                        <Nav.Link href=" "><a href=" ">Shope</a></Nav.Link>
                        <Nav.Link href=" "><a href=" " className="sale">Sale</a></Nav.Link>
                        <Nav.Link href=" "><a href=" ">Features</a></Nav.Link>
                        <Nav.Link href=" "><a href=" ">Blog</a></Nav.Link>
                        <Nav.Link href=" "><a href=" ">About</a></Nav.Link>
                        <Nav.Link href=" "><a href=" ">Contact</a></Nav.Link>
                    </Nav>
                    <div className="user-section">
                        <button className="user-btn">
                            <Image src="/icon-header-01.png" />
                        </button>
                        <span></span>
                        <button className="cart-btn">
                            <Image src="/icon-header-02.png" />
                            <span className="count">0</span>
                        </button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <Cart />
        </>
    )
}

export default MainNav;