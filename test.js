const assert = require("node:assert/strict");
const comprobarNumero = require("./ejercicio");

function capturarMensajes(fn) {
  const mensajes = [];
  const original = console.log;

  console.log = (mensaje) => mensajes.push(mensaje);

  try {
    fn();
  } finally {
    console.log = original;
  }

  return mensajes;
}

assert.deepEqual(capturarMensajes(() => comprobarNumero(5, 6, 2, 3)), [
  "¡El número es mayor que 50!",
]);

assert.deepEqual(capturarMensajes(() => comprobarNumero(1, 1, 2, 2)), [
  "¡El número es menor que 50!",
]);

console.log("Pruebas correctas.");
