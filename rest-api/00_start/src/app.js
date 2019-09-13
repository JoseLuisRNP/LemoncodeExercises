import {
  addCarRows,
  retrieveCarId,
  populateEditCarForm,
  retrieveCarForm,
  cleanTable
} from "./uiHelpers";
import {
  getAllCars,
  getCarById,
  addCar,
  deleteCar
} from "./API/carsApi";

document.addEventListener("DOMContentLoaded", () => {
  const buttonLoadCars = document.getElementById("loadcars");
  buttonLoadCars.addEventListener("click", event => {
    event.stopPropagation();
    cleanTable("cars-table");
    getAllCars().then(result => {
      addCarRows(result, "cars-table");
    });
  });

  const buttonLoadCar = document.getElementById("loadcar");
  buttonLoadCar.addEventListener("click", event => {
    event.stopPropagation();
    const carId = retrieveCarId();
    getCarById(carId).then(r => populateEditCarForm(r));
  });

  const buttonAddCar = document.getElementById("add");
  buttonAddCar.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    const car = retrieveCarForm();
    addCar(car)
      .then(_ => {
        cleanTable("cars-table");
        return getAllCars();
      })
      .then(result => {
        addCarRows(result, "cars-table");
      });
  });

  const buttonDeleteCar = document.getElementById("delete");
  buttonDeleteCar.addEventListener("click", event => {
    event.stopPropagation();
    event.preventDefault();
    const carId = retrieveCarId();
    deleteCar(carId)
      .then(_ => {
        cleanTable("cars-table");
        return getAllCars();
      })
      .then(result => {
        addCarRows(result, "cars-table");
      });
  });
});
