import { maxModelNumber, maxRGBNumber, minModelNumber, minRGBNumber } from './constants';
import carModels from './data/car-models';
import cardModelsEndings from './data/car-models-endings';

const getRandomNumber = (min: number, max: number): number => min + Math.floor(Math.random() * (max - min + 1));

const randomModel = `${carModels[getRandomNumber(0, carModels.length - 1)]} ${
  cardModelsEndings[getRandomNumber(0, cardModelsEndings.length - 1)]
} ${getRandomNumber(minModelNumber, maxModelNumber)}`;

const randomColor = `rgb(${getRandomNumber(minRGBNumber, maxRGBNumber)},
${getRandomNumber(minRGBNumber, maxRGBNumber)}, ${getRandomNumber(minRGBNumber, maxRGBNumber)})`;

const getRandomCar = (): { name: string; color: string } => ({
  name: randomModel,
  color: randomColor,
});

export default getRandomCar;
