import React from 'react';

import { carsPropType } from '../propTypes/cars';

export const CarTable = ({ cars }) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {cars.length === 0 && (
        <tr>
          <td colSpan="6">There are no cars.</td>
        </tr>
      )}
      {cars.map(car => (
        <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropType,
};
