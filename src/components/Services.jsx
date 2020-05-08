import React from 'react';

import '../styles/components/__services.scss';

import Cup from '../assets/icons/bar.svg';
import Buffet from '../assets/icons/buffet.svg';
import Room from '../assets/icons/room.svg';
import Amenities from '../assets/icons/amenities.svg';

const Services = () => {
  return (
    <section className="services">
      <article className="services__article">
        <figure className="services__article-figure">
          <img src={Cup} alt="bar" />
        </figure>
        <div className="services__article-info">
          <h2>BAR TERRACE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            velit mollitia vitae ipsa nam fugit qui itaque aut magnam?
          </p>
        </div>
      </article>
      <article className="services__article">
        <figure className="services__article-figure">
          <img src={Buffet} alt="buffet" />
        </figure>
        <div className="services__article-info">
          <h2>BUFFET</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            velit mollitia vitae ipsa nam fugit qui itaque aut magnam?
          </p>
        </div>
      </article>
      <article className="services__article">
        <figure className="services__article-figure">
          <img src={Room} alt="room service" />
        </figure>
        <div className="services__article-info">
          <h2>ROOM SERVICE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            velit mollitia vitae ipsa nam fugit qui itaque aut magnam?
          </p>
        </div>
      </article>
      <article className="services__article">
        <figure className="services__article-figure">
          <img src={Amenities} alt="amenities" />
        </figure>
        <div className="services__article-info">
          <h2>AMENITIES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            velit mollitia vitae ipsa nam fugit qui itaque aut magnam?
          </p>
        </div>
      </article>
    </section>
  );
};

export default Services;
