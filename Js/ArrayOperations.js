// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga 
// y devuelva su primer elemento. Utiliza destructuring.
const head = ([first, ...others]) => first;

// Implementa una función tail (inmutable), tal que, dado un array como entrada 
// devuelta todos menos el primer elemento. Uliza rest operator.
const tail = ([first, ...others]) => others;

// Implementa una función init (inmutable), tal que, dado un array como entrada 
// devuelva todos los elementos menos el úlmo. Uliza los métodos que ofrece Array.prototype.
const init = (arr) => {
  [element, ...others] = arr.reverse();
  return others.reverse();
};

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el úlmo elemento.
const last = (arr) => {
  [element, ...others] = arr.reverse();
  return element;
};
