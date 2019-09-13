import Axios from "axios";

const baseUrl = "http://localhost:3050";

const handleError = err => console.log(err);

export const getAllCars = () =>
  Axios.get(`${baseUrl}/api/cars`)
    .then(({ data }) => data)
    .catch(handleError);

export const getCarById = id =>
  Axios.get(`${baseUrl}/api/cars/${id}`)
    .then(({ data }) => data)
    .catch(handleError);

export const addCar = car => 
  Axios.post(`${baseUrl}/api/cars`, car)
    .catch(handleError);

export const deleteCar = id =>
  Axios.delete(`${baseUrl}/api/cars/${id}`)
    .catch(handleError);

