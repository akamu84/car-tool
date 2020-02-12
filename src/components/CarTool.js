import React from 'react';

export const CarTool = ({ cars }) => {
  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
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
          {cars.map(car =>
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          )}
        </tbody>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input type="text" id="make-input"/>
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input type="text" id="model-input"/>
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input type="text" id="year-input"/>
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input type="text" id="color-input"/>
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input type="text" id="price-input"/>
        </div>
      </form>
    </>
  );
}