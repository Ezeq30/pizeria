const quitarDelCarrito = (frutasId) => {
    if (frutasId > 0) {
        let productoIndex = carritoFrutas.findIndex((producto) => producto.id === frutasId);
        if (productoIndex !== -1) {
            carritoFrutas.splice(productoIndex, 1); 
            almacenarCarrito(); 
            actualizarTabla(); 
        }
    }
};
const actualizarTabla = () => {
    tblody.innerHTML = ""; // Limpia la tabla
    carritoFrutas.forEach((producto) => {
        tblody.innerHTML += retornarTablaHTML(producto); // Añade los productos restantes
    });
};
const agregarAlCarrito = (frutasId)=>{
    if (frutasId > 0){
        let productoEncontrado = productos.find((producto)=> producto.id === parseInt(frutasId))
        if (productoEncontrado !== undefined){
            carritoFrutas.push(productoEncontrado)
            almacenarCarrito()

            Toastify({
                text: "Producto agregado al carrito",
                duration: 5000,
                close: false,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        
        }
        
    }

}

const almacenarCarrito = () =>{
    localStorage.setItem('carritoFrutas',JSON.stringify(carritoFrutas))
  
}

const recuperarCarrito = ()=>{

    return JSON.parse(localStorage.getItem('carritoFrutas')) || []
}
const carritoFrutas = recuperarCarrito()








