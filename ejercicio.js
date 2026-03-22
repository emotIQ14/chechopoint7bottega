function comprobarNumero(a, b, c, d) {
  const resultado = (a + b) * (c + d);

  if (resultado > 50) {
    console.log("¡El número es mayor que 50!");
  } else if (resultado < 50) {
    console.log("¡El número es menor que 50!");
  } else {
    console.log("¡El número es igual a 50!");
  }
}

comprobarNumero(5, 6, 2, 3);
