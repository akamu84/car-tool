import React from 'react';
import PropTypes from 'prop-types';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';

import { carPropType } from '../propTypes/cars';
import { useForm } from '../hooks/useForm';

export const EditCarRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {
  const [carForm, change] = useForm({ ...car });

  const defaultInputRef = useDefaultInputFocus();

  const saveCar = () => {
    onSaveCar({ ...carForm, id: car.id });
  };
  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input
          type="text"
          id="edit-make-input"
          name="make"
          ref={defaultInputRef}
          value={carForm.make}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          id="edit-model-input"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          id="edit-year-input"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          id="edit-color-input"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          id="edit-make-input"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </td>
      <td>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

EditCarRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
