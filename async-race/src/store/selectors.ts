const getCurrentPage = (state: { currentPage: string }): string => state.currentPage;
const getNewCarName = (state: { newCar: { name: string } }): string => state.newCar.name;
const getNewCarColor = (state: { newCar: { color: string } }): string => state.newCar.color;
const getSelectedCarName = (state: { selectedCar: { name: string } }): string => state.selectedCar.name;
const getSelectedCarColor = (state: { selectedCar: { color: string } }): string => state.selectedCar.color;
const getSelectedCar = (state: {
  selectedCar: { id: number; name: string; color: string };
}): { id: number; name: string; color: string } => state.selectedCar;
const getStartedCars = (state: {
  startedCars: {
    velocity: number;
    distance: number;
    id: number;
    isStarted: boolean;
  }[];
}): {
  velocity: number;
  distance: number;
  id: number;
  isStarted: boolean;
}[] => state.startedCars;
const selectWinners = (state: {
  winners: {
    id: number;
    wins: number;
    time: number;
    color: string;
    name: string;
  }[];
}): {
  id: number;
  wins: number;
  time: number;
  color: string;
  name: string;
}[] => state.winners;
const getPageNumber = (state: { winnersPageNumber: number }): number => state.winnersPageNumber;
const getSortConfig = (state: { sortConfig: { order: string; sort: string } }): { order: string; sort: string } =>
  state.sortConfig;
const selectCars = (state: {
  cars: { name: string; color: string; id: number }[];
}): { name: string; color: string; id: number }[] => state.cars;
const getGarageCount = (state: { carsCount: number }): number => state.carsCount;
const getGaragePageNumber = (state: { garagePageNumber: number }): number => state.garagePageNumber;
const getWinnersCount = (state: { winnersCount: number }): number => state.winnersCount;
const getWinnersPageNumber = (state: { winnersPageNumber: number }): number => state.winnersPageNumber;

export {
  getCurrentPage,
  getNewCarName,
  getNewCarColor,
  getSelectedCarName,
  getSelectedCarColor,
  getSelectedCar,
  getStartedCars,
  selectWinners,
  getPageNumber,
  getSortConfig,
  selectCars,
  getGarageCount,
  getGaragePageNumber,
  getWinnersCount,
  getWinnersPageNumber,
};
