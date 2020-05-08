import React from 'react';

import '../styles/components/__form.scss';

const Form = () => {
  return (
    <form className="form" id="form">
      <div className="form__info">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          necessitatibus officia nostrum dolorum id fugit.
        </p>
      </div>
      <label className="form__label" htmlFor="name">
        NAME
      </label>
      <input type="text" className="form__input input-name" name="name" />

      <div className="form__container">
        <div className="form__container-e">
          <label className="form__label" htmlFor="email">
            EMAIL
          </label>
          <input className="form__input input-23" type="text" name="email" />
        </div>
        <div className="form__container-p">
          <label className="form__label" htmlFor="phone">
            PHONE
          </label>
          <input type="text" className="form__input input-23" name="phone" />
        </div>
      </div>

      <label className="form__label" htmlFor="select">
        SELECT OPTION
      </label>
      <select name="select" className="form__select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
      <label className="form__label" htmlFor="check">
        EROS IN CURSUS TUPIS
      </label>
      <div className="form__radio">
        <div>
          <input type="radio" name="check" id="" />
          <label htmlFor="check">Opcion 1</label>
        </div>
        <div>
          <input type="radio" name="check" id="" />
          <label htmlFor="check">Opcion 3</label>
        </div>
        <div>
          <input type="radio" name="check" id="" />
          <label htmlFor="check">Opcion 2</label>
        </div>
        <div>
          <input type="radio" name="check" id="" />
          <label htmlFor="check">Opcion 4</label>
        </div>
      </div>
      <label className="form__label" htmlFor="area">
        LEAVE US A MESSAGE
      </label>
      <textarea
        className="form__textArea"
        placeholder="Comentario*"
        name="area"
        rows="8"
      />

      <button type="button" className="btn">
        {' '}
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
