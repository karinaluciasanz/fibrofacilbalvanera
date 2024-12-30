const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaDeco = document.createElement("div");
    nuevaDeco.classList = "tarjeta-producto"
    nuevaDeco.innerHTML = `
    <img src="${producto.imgURL}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaDeco);
    nuevaDeco.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(decoracion);