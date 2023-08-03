//Se crea la clase product
class Product {
  constructor(id, marca, color, precio) {
    this.id = id;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
  }
}

//se instancian los productos hardcodeados
const producto1 = new Product(1, "FAD", "Amarillo", 10000);
const producto2 = new Product(2, "FAD", "Fluo", 12000);
const producto3 = new Product(3, "FAD", "Verde", 15000);
const producto4 = new Product(4, "Mercuri", "Violeta", 20000);
const producto5 = new Product(5, "Ene ene", "Cromado", 10000);
const producto6 = new Product(6, "FAD", "Negro", 10000);

//se crea un Array llamado products
let products = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];
