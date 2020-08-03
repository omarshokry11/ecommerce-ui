import React from 'react';
import { Image } from 'react-bootstrap';

import "./style/OurBlog.scss";

const OurBlog = () => {

    return (
        <div className="container blog">
            <div className="row">
                <div className="col-12 text-center title">
                    <h3>OUR BLOG</h3>
                </div>
                <div className="col-md-4 col-12 inner-blog">
                    <Image src="blog-01.jpg" />
                    <a href=" ">Black Friday Guide: Best Sales & Discount Codes</a>
                    <h6>
                        <span>By Nancy Ward on July 22, 2017</span>
                    </h6>
                    <p>
                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                    </p>
                </div>
                <div className="col-md-4 col-12 inner-blog">
                    <Image src="blog.jpg" />
                    <a href=" ">The White Sneakers Nearly Every Fashion Girls Own</a>
                    <h6>
                        <span>By Nancy Ward on July 18, 2017</span>
                    </h6>
                    <p>
                    Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame

                    </p>
                </div>
                <div className="col-md-4 col-12 inner-blog">
                    <Image src="blog-03.jpg" />
                    <a href=" ">New York SS 2018 Street Style: Annina Mislin</a>
                    <h6>
                        <span>By Nancy Ward on July 22, 2017</span>
                    </h6>
                    <p>
                        Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurBlog;