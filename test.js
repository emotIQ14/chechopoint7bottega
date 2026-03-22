const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const codigo = fs.readFileSync(path.join(__dirname, "ejercicio.js"), "utf8");
const mensajes = [];
const contexto = {
  console: {
    log: (mensaje) => mensajes.push(mensaje),
  },
};

vm.createContext(contexto);
vm.runInContext(codigo, contexto);

assert.equal(typeof contexto.comprobarNumero, "function");
assert.deepEqual(mensajes, ["¡El número es mayor que 50!"]);

mensajes.length = 0;
contexto.comprobarNumero(1, 1, 2, 2);
assert.deepEqual(mensajes, ["¡El número es menor que 50!"]);

mensajes.length = 0;
contexto.comprobarNumero(5, 5, 2, 3);
assert.deepEqual(mensajes, ["¡El número es igual a 50!"]);

console.log("Pruebas correctas.");
