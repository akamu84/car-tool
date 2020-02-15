import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { carsPropType } from '../propTypes/cars';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = memo(
  ({
    cars,
    editCarId,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onSaveCar: saveCar,
    onCancelCar: cancelCar,
  }) => (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <label htmlFor="edit-make-input">Make</label>
          </th>
          <th>
            <label htmlFor="edit-model-input">Model</label>
          </th>
          <th>
            <label htmlFor="edit-year-input">Year</label>
          </th>
          <th>
            <label htmlFor="edit-color-input">Color</label>
          </th>
          <th>
            <label htmlFor="edit-price-input">Price</label>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.length === 0 && (
          <tr>
            <td colSpan="7">There are no cars.</td>
          </tr>
        )}
        {cars.map(car =>
          car.id === editCarId ? (
            <EditCarRow
              key={car.id}
              car={car}
              onSaveCar={saveCar}
              onCancelCar={cancelCar}
            />
          ) : (
            <ViewCarRow
              key={car.id}
              car={car}
              onDeleteCar={deleteCar}
              onEditCar={editCar}
            />
          )
        )}
      </tbody>
    </table>
  )
);

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number,
  onDeleteCar: PropTypes.func.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
