import React from 'react';
import hero from '../assets/images/hero.png';
import '../styles/components/__main.scss';

const Main = () => {
  return (
    <main className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <h1 className="hero__title">
        Lorem ipsum
        <br />
        dolor sit amet.
      </h1>
      <a className="hero__button btn-register" href="#form">
        REGISTER NOW
      </a>
      <h3 className="hero__scroll">SCROLL</h3>
      {/* <div className="video-background">
        <div className="video-responsive__VideoResponsiveContainer-xnd2n1-0 frYMiZ">
          <iframe
            src="https://www.youtube.com/embed/5f5Ig_U2Bpk?version=3&amp;start=13&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=['5f5Ig_U2Bpk']"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
            color="blue"
            t="0"
          ></iframe>
        </div>
      </div> */}
    </main>
  );
};

export default Main;
