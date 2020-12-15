import React, { useState } from "react";

//
import "./style/TopBar.scss"

const MaintopNav = () => {

    const [visible, setVisible] = useState('none');
    const [curreny, setCurreny] = useState('USD');


    const handleVisibility = () => {
        return visible === "none" ? setVisible("block") : setVisible("none")
    }

    return (
        <div className="top-bar d-md-block d-none">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-12 social">
                        <a href=" ">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                        <a href=" ">
                            <i className="fab fa-instagram"> </i>
                        </a>
                        <a href=" ">
                            <i className="fab fa-pinterest-p"> </i>
                        </a>
                        <a href=" ">
                            <i className="fab fa-snapchat-ghost"> </i>
                        </a>
                        <a href=" ">
                            <i className="fab fa-youtube"> </i>
                        </a>
                    </div>

                    <div className="col-md-4 col-12 text-center">
                        <h6>Free shipping for standard order over $100</h6>
                    </div>

                    <div className="col-md-4 col-12 text-center top-bar-controles">
                        <h6>fashi@colorlib.com</h6>
                        <div className="curreny-container">
                            <button onClick={() => handleVisibility()} className="current-currency">
                                {curreny} <i className=" fas fa-chevron-down"> </i>
                            </button>
                            <div className={`curreny-dropdown ${visible}`}>
                                <button style={ curreny === "USD" ? {backgroundColor: "#e65540", color: "#FFF"} : {backgroundColor: "transparent", color: "#888888"}} onClick={() => { setCurreny("USD"); setVisible("none") }}>USD</button>
                                <button style={ curreny === "EUR" ? {backgroundColor: "#e65540", color: "#FFF"} : {backgroundColor: "transparent", color: "#888888"}} onClick={() => { setCurreny("EUR"); setVisible("none") }}>EUR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MaintopNav;