import React, { useState } from 'react';
import PropTypes from 'prop-types';

const carFormInitial = {
  make: '',
  model: '',
  year: 1900,
  color: '',
  price: 0,
};

export const CarForm = ({ onSubmitCar, buttonText }) => {
  const [carForm, setCarForm] = useState(carFormInitial);

  const change = ({ target: { name, type, value } }) => {
    setCarForm({
      ...carForm,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    setCarForm(carFormInitial);
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">
          Make:
          <input
            type="text"
            id="make-input"
            name="make"
            value={carForm.make}
            onChange={change}
          />
        </label>
      </div>
      <div>
        <label htmlFor="model-input">
          Model:
          <input
            type="text"
            id="model-input"
            name="model"
            value={carForm.model}
            onChange={change}
          />
        </label>
      </div>
      <div>
        <label htmlFor="year-input">
          Year:
          <input
            type="number"
            id="year-input"
            name="year"
            value={carForm.year}
            onChange={change}
          />
        </label>
      </div>
      <div>
        <label htmlFor="color-input">
          Color:
          <input
            type="text"
            id="color-input"
            name="color"
            value={carForm.color}
            onChange={change}
          />
        </label>
      </div>
      <div>
        <label htmlFor="price-input">
          Price:
          <input
            type="number"
            id="price-input"
            name="price"
            value={carForm.price}
            onChange={change}
          />
        </label>
      </div>
      <button type="button" onClick={submitCar}>
        {buttonText}
      </button>
    </form>
  );
};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  onSubmitCar: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};
