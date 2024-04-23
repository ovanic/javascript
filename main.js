// Arrays de los productos y precios de los mismos
const nombreProductos = ["kiwi", "pera", "naranja", "limon", "banana"];
const precioProductos = [500, 300, 200, 250, 500];

// función para calcular el precio total al finalizar la simulación
function calcularPrecioTotal(productos) {
  let precioFinal = 0;
  for (let i = 0; i < productos.length; i++) {
    precioFinal += precioProductos[productos[i]];
  }
  return precioFinal;
}

// funcion para el proceso de toda la compra de los productos
function comprarProductos() {

  alert("Bienvenido a la verduleria.");

  const productosAComprar = [];
  
  for (let i = 0; i < 5; i++) {
    let indiceProductos;
    do {
        indiceProductos = parseInt(prompt(`Ingresa el numero (0-4) del producto ${i + 1} que quieres comprar:\n0: Kiwi\n1: Pera\n2: Naranja\n3: Limon\n4: Banana`));
    } while (isNaN(indiceProductos) || indiceProductos < 0 || indiceProductos > 4);
    
    productosAComprar.push(indiceProductos); 
  }
  
  // se calcula el precio total de la suma de los 5 productos a comprar
  const precioFinal = calcularPrecioTotal(productosAComprar);
  
  
  console.log(`El precio final seria de AR$${precioFinal.toFixed(2)}. Gracias por su commpra!`);
}

comprarProductos();
