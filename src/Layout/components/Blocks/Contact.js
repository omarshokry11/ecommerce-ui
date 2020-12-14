import React from 'react';
import Map from './googleMap.js';

import "./style/Contact.scss";



const Contact = () => {
    return(
        <>
        <div className="contact">
            <div className="cover">
                <h2>CONTACT</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Map />
                    </div>
                    <div className="col-md-6 col-12 main-contact">
                        <h4>Send us your message</h4>
                        <div className="bo4">
                            <input placeholder="Full Name" />
                        </div>
                        <div className="bo4">
                            <input placeholder="Phone Number" />
                        </div>
                        <div className="bo4">
                            <input placeholder="Email Address" />
                        </div>
                        <div className="bo4">
                            <textarea placeholder="Email Address" />
                        </div>
                        <div className="btn">
                            <button>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;