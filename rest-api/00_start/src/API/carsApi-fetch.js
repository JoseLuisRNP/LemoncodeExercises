const baseUrl = "http://localhost:3050";

const handleError = err => console.log(err);

const createRequest = (url, options) => {
  const _options = options ? options : {};
  console.log(_options);
  return fetch(url, _options).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
};

export const getAllCars = () => {
  const url = `${baseUrl}/api/cars`;
  return createRequest(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).catch(handleError);
};

export const getCarById = id => {
  const url = `${baseUrl}/api/cars/${id}`;
  return createRequest(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).catch(handleError);
}

export const addCar = car => {
  const url = `${baseUrl}/api/cars`
  return createRequest(url, {
    method: 'POST',
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  }).catch(handleError);
}

export const deleteCar = id => {
  const url = `${baseUrl}/api/cars/${id}`;
  return createRequest(url, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
  }).catch(handleError);
}
