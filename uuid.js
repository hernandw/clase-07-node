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

/*
Date.now(): Esto devuelve el número de milisegundos transcurridos desde la medianoche del 1 de enero de 1970 (conocido como el “epoch” o “época”) hasta el momento actual. Básicamente, es un timestamp que representa la fecha y hora actual.
.toString(36): Aquí estamos convirtiendo ese timestamp en una cadena de texto. El argumento 36 indica que queremos representar el número en base 36. En base 36, los dígitos van desde 0 hasta 9 y luego de la ‘a’ a la ‘z’.
.slice(2): Finalmente, tomamos una subcadena de la cadena resultante. El índice 2 indica que queremos eliminar los primeros dos caracteres de la cadena. Esto se hace para eliminar el prefijo “0o” que se agrega automáticamente cuando convertimos a base 36.
En resumen, la expresión Date.now().toString(36).slice(2) nos da una cadena que representa el timestamp actual en base 36, sin el prefijo “0o”. Por ejemplo, si ejecutamos esta línea de código ahora mismo, obtendríamos algo como "1krs6j".



-------------------------
La época Unix es una fecha concreta a partir de la cual se cuentan los segundos, lo que da como resultado una nueva medida de tiempo. Esta medida se utiliza en sistemas operativos como Unix o Linux, así como en algunos lenguajes de programación como PHP. El tiempo en estos sistemas operativos se mide en segundos desde el 1 de enero de 1970, a las cero horas (medianoche UTC/GMT) 1.

Literalmente hablando, el epoch es el Unix time 0, que corresponde a la medianoche del 1 de enero de 1970. Sin embargo, el término “epoch” a menudo se utiliza como sinónimo de Unix time.

Este sistema de medición es ampliamente utilizado en programación y sistemas informáticos para representar fechas y horas de manera uniforme. Por ejemplo, cuando ves un timestamp en un archivo o en una base de datos, es probable que esté basado en la época Unix.


*/