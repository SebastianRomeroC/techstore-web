const contadorCarrito = document.getElementById("contador-carrito");
const totalCarrito = document.getElementById("total-carrito");
let cantidadArticulos = 0;
let total = 0;

document.querySelectorAll(".btn-comprar").forEach((boton) => {
  boton.addEventListener("click", () => {
    cantidadArticulos += 1;
    total += Number(boton.dataset.precio);

    contadorCarrito.textContent = String(cantidadArticulos);
    totalCarrito.textContent = String(total);
  });
});

document.getElementById("btn-tema").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  console.log("Pendiente modo oscuro");
});
