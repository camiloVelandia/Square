import React from 'react';

import '../styles/components/__reserve.scss';

import Photo from '../assets/images/reserve.png';

const Reserve = () => {
  return (
    <section className="reserve">
      <figure className="reserve__image">
        <img src={Photo} alt="Habitacion" />
      </figure>
      <article className="reserve__info">
        <h1 className="reserve__info-title">
          Lorem ipsum
          <br />
          dolor sit amet.
        </h1>
        <p className="reserve__info-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          repellendus tenetur dolorem provident dignissimos, obcaecati
          doloremque laboriosam error recusandae nulla nisi maiores quas eum
          possimus enim omnis excepturi doloribus neque ad facilis ullam
        </p>
        <button className="reserve__button btn" type="button">
          RESERVE
        </button>
      </article>
    </section>
  );
};

export default Reserve;
