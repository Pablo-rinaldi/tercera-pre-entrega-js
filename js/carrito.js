const carrito = document.getElementById("carrito");
const clear = document.getElementById("clear");
const confirm = document.getElementById("confirm");

function clearCart() {
  localStorage.clear();
  location.reload();
}

function addConfirmMsg() {
  const confirmMsg = document.createElement("p");
  confirmMsg.classList.add("lista-carrito");
  confirmMsg.append("Gracias por tu compra el total es de: $" + getTotal());
  carrito.appendChild(confirmMsg);
  localStorage.clear();
  confirm.setAttribute("disabled", true);
}

function getTotal() {
  const cart = JSON.parse(localStorage.getItem("carrito"));
  return cart.reduce((acc, product) => (acc += product.precio), 0);
}

function showCart() {
  const localStorageCart = localStorage.getItem("carrito");
  if (localStorageCart) {
    const cart = JSON.parse(localStorageCart);

    cart.map((product) => {
      const cartItem = document.createElement("p");
      cartItem.classList.add("lista-carrito");
      cartItem.append(
        `Marca: ${product.marca}.Color: ${product.color}.    Precio: $${product.precio} `
      );

      carrito.appendChild(cartItem);
    });
  } else {
    const emptyCartMsg = document.createElement("p");
    emptyCartMsg.append("El carrito esta vacio!! Agregalos desde Productos!");
    carrito.appendChild(emptyCartMsg);
    confirm.setAttribute("disabled", true);
  }
}

clear.addEventListener("click", clearCart);
confirm.addEventListener("click", addConfirmMsg);

showCart();
