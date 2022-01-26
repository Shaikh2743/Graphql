import React, { Component } from 'react';
import './gallery.css';

import Main from './main-logo.png';
import Carousel from './jacket2.jpg';
import Carousel1 from './jacket2-a.jpg';
import Carousel2 from './jacket2-b.jpg';
import Carousel3 from './jacket2-c.jpg';
import Carousel4 from './jacket2-d.jpg';
import Carousel5 from './jacket2-e.jpg';


export default class gallery extends Component {
    render() {
        return <div>
            {/* <div class="gallery">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="product-imgs">
                            <div class="img-display">
                                <div class="img-showcase">
                                    <img id="slide1" class="Product" src={Carousel} />
                                    <img id="slide2" class="Product" src={Carousel1} />
                                    <img id="slide3" class="Product" src={Carousel2} />
                                    <img id="slide4" class="Product" src={Carousel3} />
                                    <img id="slide5" class="Product" src={Carousel4} />
                                    <img id="slide6" class="Product" src={Carousel5} />
                                </div>
                                <div class="img-select">
                                    <div class="img-item">
                                        <a href="#slide1" data-id="1"><img src={Carousel} alt="product-image" /></a>
                                    </div>
                                    <div class="img-item">
                                        <a href="#slide2" data-id="1"><img src={Carousel1} alt="product-image" /></a>
                                    </div>
                                    <div class="img-item">
                                        <a href="#slide3" data-id="1"><img src={Carousel2} alt="product-image" /></a>
                                    </div>
                                    <div class="img-item">
                                        <a href="#slide4" data-id="1"><img src={Carousel3} alt="product-image" /></a>
                                    </div>
                                    <div class="img-item">
                                        <a href="#slide5" data-id="1"><img src={Carousel4} alt="product-image" /></a>
                                    </div>
                                    <div class="img-item">
                                        <a href="#slide6" data-id="1"><img src={Carousel5} alt="product-image" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="main-gallery">
                <div className="gallery-slider">
                    <div className="thumbnails">
                        <div class="img-select">
                            <div class="img-item" >
                                <a href="#slide1" data-id="1"><img src={Carousel2} alt="product-image" /></a>
                            </div>
                            <div class="img-item" >
                                <a href="#slide2" data-id="1"><img src={Carousel} alt="product-image" /></a>
                            </div>
                            <div class="img-item" >
                                <a href="#slide3" data-id="1"><img src={Carousel1} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide4" data-id="1"><img src={Carousel3} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide5" data-id="1"><img src={Carousel4} alt="product-image" /></a>
                            </div>
                            <div class="img-item">
                                <a href="#slide6" data-id="1"><img src={Carousel5} alt="product-image" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="main-image">
                        <div class="gallery">
                            <div class="card-wrapper">
                                <div class="card">
                                    <div class="product-imgs">
                                        <div class="img-display">
                                            <div class="img-showcase">
                                                <img id="slide1" class="Product" src={Carousel2} />
                                                <img id="slide2" class="Product" src={Carousel} />
                                                <img id="slide3" class="Product" src={Carousel1} />
                                                <img id="slide4" class="Product" src={Carousel3} />
                                                <img id="slide5" class="Product" src={Carousel4} />
                                                <img id="slide6" class="Product" src={Carousel5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="gallery-content">
                    world
                </div>
            </div>
        </div>;
    }
}
