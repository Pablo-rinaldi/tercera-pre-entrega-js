const imagenesProd = document.getElementById("imagenes");
const fadAmarilla = document.getElementById("fad-amarilla");
const fadFluo = document.getElementById("fad-fluo");
const fadVerde = document.getElementById("fad-verde");
const mercuriVioleta = document.getElementById("mercuri-violeta");
const nnCromo = document.getElementById("nn-cromo");
const nnNegra = document.getElementById("nn-negra");

fadAmarilla.addEventListener("click", () => addToCart(1));
fadFluo.addEventListener("click", () => addToCart(2));
fadVerde.addEventListener("click", () => addToCart(3));
mercuriVioleta.addEventListener("click", () => addToCart(4));
nnCromo.addEventListener("click", () => addToCart(5));
nnNegra.addEventListener("click", () => addToCart(6));

//funcion para agregar producto al carrito
function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);
  let cart = JSON.parse(localStorage.getItem("carrito")) ?? [];
  cart.push(selectedProduct);
  localStorage.setItem("carrito", JSON.stringify(cart));
}
