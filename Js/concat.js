// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
// devuelva la concatenación de ambos. Uliza rest / spread operators.
const concat = (a, b) => [...a, ...b];

// Implementa una versión del ejercicio anterior donde se acepten múlples arrays de entrada (más de 2).

const concatMulti = (...args) => {
  const arr = [];
  args.forEach(arg => arr.push(...arg));
  return arr;
}