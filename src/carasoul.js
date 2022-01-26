import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Search from './search.png';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Search} alt=" legend " />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Search} alt=" legend " />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Search} alt=" legend " />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

