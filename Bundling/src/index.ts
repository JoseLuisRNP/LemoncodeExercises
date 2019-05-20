const logoLemoncode =   require('./content/logo_1.png');

interface User {
  name:string,
  age:number,
}

const someUser:User = {
  name: 'John',
  age: 30,
}

const message:string = `${someUser.name} says hello world from TypeScript!`;
document.write(message);


const img = document.createElement("img");
img.src = logoLemoncode;
document.getElementById("imgContainer").appendChild(img);


console.log(`Api base: ${process.env.API_BASE}`);