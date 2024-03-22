const { v4: uuidv4 } = require("uuid");
const getId = require("./helper/getId")


console.log(uuidv4())

const id = uuidv4().slice(24, 36);

console.log(id)

const persona = {
    id: getId(),
    name: "hernan",
    age: 27
}
console.log(persona)

/* 
Ejercicio: Generar un UUID único para cada usuario registrado

Supongamos que estás construyendo una aplicación de registro de usuarios y necesitas asignar un UUID único a cada usuario. Aquí está el enunciado del ejercicio:

Crea una función que genere un UUID (v4) para cada usuario registrado.
Almacena los UUIDs generados junto con otros datos del usuario (como nombre, correo electrónico, etc.).
JavaScript




*/

const usuarios = []

/* function registrarUsuarios(name, email) {
    const newUser = {
        id: uuidv4().slice(24, 36),
        name, 
        email
    }
    usuarios.push(newUser)
    return newUser
}

const usuario1 = registrarUsuarios("Rodrigo", "rodrigo@gmail.com")
const usuario2 = registrarUsuarios("Samuel", "samuel@gmail.com")

console.log('Usuarios registrados')
console.log(usuario1)
console.log(usuario2) */

function registrarUsuarios(id, name, email) {
  const newUser = {
    id,
    name,
    email,
  };
  usuarios.push(newUser);
  return newUser;
}

const usuario3 = registrarUsuarios(uuidv4().slice(24, 36), "Jessica", "jessica@gmail.com");
const usuario4 = registrarUsuarios(uuidv4().slice(24, 36), "Carlos", "carlos@gmail.com");

/* console.log("Usuarios registrados");
console.log('----------------')
console.log(usuario3);
console.log(usuario4);  */