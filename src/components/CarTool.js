import React, { useState, useCallback, useEffect } from 'react';

import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import {
  getAllCars as dbGetAllCars,
  createCar as dbCreateCar,
  replaceCar as dbReplaceCar,
  deleteCar as dbDeleteCar,
} from '../services/cars';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {
  const [cars, setCars] = useState([]);
  const [editCarId, setEditCarId] = useState(-1);

  const defaultInputRef = useDefaultInputFocus();

  const init = useCallback(() => {
    setEditCarId(-1);
    if (defaultInputRef.current) {
      defaultInputRef.current.focus();
    }
  }, [defaultInputRef]);

  const refreshCars = useCallback(
    () =>
      dbGetAllCars().then(allCars => {
        setCars(allCars);
        init();
      }),
    [init]
  );

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);

  const addCar = useCallback(
    car => {
      dbCreateCar(car).then(refreshCars);
    },
    [refreshCars]
  );

  const deleteCar = useCallback(
    carId => {
      dbDeleteCar(carId).then(refreshCars);
    },
    [refreshCars]
  );

  const replaceCar = useCallback(
    car => {
      dbReplaceCar(car).then(refreshCars);
    },
    [refreshCars]
  );

  const cancelCar = useCallback(() => {
    init();
  }, [init]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={setEditCarId}
        onSaveCar={replaceCar}
        onCancelCar={cancelCar}
      />
      <CarForm
        onSubmitCar={addCar}
        buttonText="Add Car"
        ref={defaultInputRef}
      />
    </>
  );
};
