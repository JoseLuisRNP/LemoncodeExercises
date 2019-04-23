// Implementa una función clone que, a partir de un objeto de entrada source devuelva 
// un nuevo objeto con las propiedades de source :
function clone(source) {
  var cloneSource = {};
  for(var prop in source){
    cloneSource[prop] = source[prop];
  }
  return cloneSource;
}

//Version con spread operator
const cloneArrow = source => ({...source});

// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso 
// de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
// const a = {name: "Maria", surname: "Ibañez", country: "SPA"}; const b = {name: "Luisa", age: 31, married: true}; 
// el resultado de mezclar a sobre b sería:
// merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
function merge(source, target) {
  var mergeObject = clone(target);
  for(var prop in source){
    mergeObject[prop] = source[prop];
  }
  return mergeObject;
}

//Version con spread operator
const mergeArrow = (a,b) => ({...b, ...a});
