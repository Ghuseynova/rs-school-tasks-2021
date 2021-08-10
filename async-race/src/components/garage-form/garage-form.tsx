import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../button';
import Input from '../input';
import { updateCar, addNewCar } from '../../store/actions';
import {
  NEW_CAR_COLOR_CHANGED,
  NEW_CAR_NAME_CHANGED,
  SELECTED_CAR_COLOR_CHANGED,
  SELECTED_CAR_NAME_CHANGED,
} from '../../store/types';
import getRandomCar from '../../utils';
import {
  getNewCarColor,
  getNewCarName,
  getSelectedCar,
  getSelectedCarColor,
  getSelectedCarName,
} from '../../store/selectors';

import './garage-form.scss';
import { maxGeneratedCarNumber } from '../../constants';

const GarageForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const newCarName = useSelector(getNewCarName);
  const newCarColor = useSelector(getNewCarColor);
  const selectedCarName = useSelector(getSelectedCarName);
  const selectedCarColor = useSelector(getSelectedCarColor);
  const selectedCar = useSelector(getSelectedCar);

  function handleNewCarColor(color: string) {
    dispatch({ type: NEW_CAR_COLOR_CHANGED, color });
  }

  function handleNewCarName(name: string) {
    dispatch({ type: NEW_CAR_NAME_CHANGED, name });
  }

  function handleSelectedCarColor(color: string) {
    dispatch({ type: SELECTED_CAR_COLOR_CHANGED, color });
  }

  function handleSelectedCarName(name: string) {
    dispatch({ type: SELECTED_CAR_NAME_CHANGED, name });
  }

  function handleCreateCar() {
    const car = {
      name: newCarName,
      color: newCarColor,
    };
    dispatch(addNewCar(car));
  }

  function handleGeneratorCar() {
    for (let i = 0; i < maxGeneratedCarNumber; i += 1) {
      dispatch(addNewCar(getRandomCar()));
    }
  }

  return (
    <form action="#" className="g-form">
      <div className="g-form__group">
        <Input
          type="text"
          className="g-form__input"
          value={newCarName}
          callback={(value: string) => handleNewCarName(value)}
        />
        <Input
          type="color"
          className="form-control--color g-form__input"
          value={newCarColor}
          callback={(value: string) => handleNewCarColor(value)}
        />
        <Button className="button--md button--lightblue g-form__btn" text="Create" callback={() => handleCreateCar()} />
      </div>
      <div className="g-form__group">
        <Input
          type="text"
          className="g-form__input"
          value={selectedCarName}
          callback={(value: string) => handleSelectedCarName(value)}
        />
        <Input
          type="color"
          className="form-control--color g-form__input"
          value={selectedCarColor}
          callback={(value: string) => handleSelectedCarColor(value)}
        />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Update"
          callback={() => dispatch(updateCar(selectedCar))}
        />
      </div>
      <div className="g-form__group">
        <Button className="button--md button--lightgreen g-form__btn" text="Race" callback={() => {}} />
        <Button className="button--md button--lightgreen g-form__btn" text="Reset" callback={() => {}} />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Generate Cars"
          callback={() => handleGeneratorCar()}
        />
      </div>
    </form>
  );
};

export default GarageForm;
