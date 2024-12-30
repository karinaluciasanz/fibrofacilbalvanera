const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoSouvenir = document.createElement("div");
    nuevoSouvenir.classList = "tarjeta-producto"
    nuevoSouvenir.innerHTML = `
    <img src="${producto.imgURL}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevoSouvenir);
    nuevoSouvenir.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(souvenirs);