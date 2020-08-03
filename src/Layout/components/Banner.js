import React from "react";
import { Image } from "react-bootstrap";
import "./style/Banner.scss"


const Banner = () => {
    return(
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                       <div className="col-md-4 col-12">
                           <div className="dresses">
                               <Image src="banner/banner-1.jpg" />
                               <a href=" ">DRESSES</a>
                           </div>
                           <div className="glasses">
                               <Image src="banner/banner-4.jpg" />
                               <a href=" ">SUNGLASSES</a>
                           </div>
                       </div>
                       <div className="col-md-4 col-12">
                           <div className="watch">
                               <Image src="banner/banner-2.jpg" />
                                <a href=" ">WATCHES</a>
                           </div>
                           <div className="footer">
                               <Image src="banner/banner-5.jpg" />
                                <a href=" ">FOOTERWEAR</a>
                           </div>
                       </div>
                       <div className="col-md-4 col-12">
                           <div className="bag">
                               <Image src="banner/banner-3.jpg" />
                               <a href=" ">BAGS</a>
                           </div>
                           <div className="signup text-center">
                               <h4>SIGN UP & GET 20% OFF</h4>
                               <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                               <a href=" ">SIGN UP</a>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;