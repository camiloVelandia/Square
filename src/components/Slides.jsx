import React, { Component } from 'react';
import Swiper from 'swiper';

import 'swiper/css/swiper.min.css';
import '../styles/components/__slides.scss';

// images
import Image1 from '../assets/images/slide1.png';
import Image2 from '../assets/images/slide2.png';
import Image3 from '../assets/images/slide3.png';

const categoryData = ['vino', 'site', 'room'];
const imageData = [Image1, Image2, Image3];

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, category: ['All', 'vino', 'site', 'room'] };
  }
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  render() {
    return (
      <div className="slide">
        <div className="swiperMainContainer">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {categoryData.map((el, index) => {
                const currentSection = this.state.category[this.state.index];
                if (el === currentSection || currentSection === 'All') {
                  return (
                    <div className="swiper-slide" key={index}>
                      <div className="slideInfo">
                        <h1>
                          Lorem ipsum <br /> dolor sit amet.
                        </h1>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur consequuntur consectetur quo sit
                          atque soluta repudiandae voluptatibus explicabo fugiat
                          optio!
                        </p>
                      </div>
                      <div className="imgCardHolder">
                        <img src={imageData[index]} alt="images" />
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slides;
