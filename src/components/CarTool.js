import React, { useState } from 'react';

import { carsPropType } from '../propTypes/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {
  const [cars, setCars] = useState(initialCars.concat());

  const addCar = car => {
    setCars(cars.concat({ ...car, id: Math.max(...cars.map(c => c.id)) + 1 }));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
      <CarForm onSubmitCar={addCar} buttonText="Add Car" />
    </>
  );
};

CarTool.propTypes = {
  cars: carsPropType,
};
