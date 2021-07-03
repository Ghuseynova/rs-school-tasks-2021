import { maxModelNumber, maxRGBNumber, minModelNumber, minRGBNumber } from './constants';
import carModels from './data/car-models';
import cardModelsEndings from './data/car-models-endings';

const randomBetween = (min: number, max: number): number => min + Math.floor(Math.random() * (max - min + 1));

const getRandomCar = (): { name: string; color: string } => ({
  name: `${carModels[randomBetween(0, carModels.length - 1)]} ${
    cardModelsEndings[randomBetween(0, cardModelsEndings.length - 1)]
  } ${randomBetween(minModelNumber, maxModelNumber)}`,
  color: `rgb(${randomBetween(minRGBNumber, maxRGBNumber)},${randomBetween(minRGBNumber, maxRGBNumber)},${randomBetween(
    minRGBNumber,
    maxRGBNumber,
  )})`,
});

export default getRandomCar;
