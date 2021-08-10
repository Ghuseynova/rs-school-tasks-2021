const carModels = [
  'tesla',
  'mersedes',
  'toyota',
  'Lamborghini',
  'Dodge',
  'Ford',
];

const cardModelsEndings = [
  'Cortina',
  'Tornado',
  'Tarraco',
  'Huracán',
  'Viper',
  'Tarraco',
];

const randomBetween = (min: number, max: number): number =>
  min + Math.floor(Math.random() * (max - min + 1));

const getRandomCar = (): { name: string; color: string } => ({
  name: `${carModels[randomBetween(0, carModels.length - 1)]} ${
    cardModelsEndings[randomBetween(0, cardModelsEndings.length - 1)]
  } ${randomBetween(5, 700)}`,
  color: `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(
    0,
    255,
  )})`,
});

export default getRandomCar;
