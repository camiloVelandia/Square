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
      <input
        type="text"
        className="form__input input-name"
        name="name"
        required
      />

      <div className="form__container">
        <div className="form__container-e">
          <label className="form__label" htmlFor="email">
            EMAIL
          </label>
          <input
            className="form__input input-23"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="form__container-p">
          <label className="form__label" htmlFor="phone">
            PHONE
          </label>
          <input
            type="number"
            className="form__input input-23"
            name="phone"
            required
          />
        </div>
      </div>

      <label className="form__label" htmlFor="select">
        SELECT OPTION
      </label>
      <div className="caja">
        <select name="select" className="form__select" required>
          <option value="">seleccione una opcion</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
      </div>
      <label className="form__label" htmlFor="check" required>
        EROS IN CURSUS TUPIS
      </label>
      <div className="form__radio">
        <div>
          <label>
            <input type="radio" name="check" id="" required />
            Opcion 1
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="check" id="" />
            Opcion 2
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="check" id="" />
            Opcion 3
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="check" id="" />
            Opcion 4
          </label>
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
        required
      />

      <button type="submit" className="btn">
        {' '}
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
