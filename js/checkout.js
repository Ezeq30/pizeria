
const tblody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#btnComprar")

const retornarTablaHTML =(producto) =>{ 
   return ` <tr>
                <th id="tablehead">
                <img class="chekimg" src="${producto.imagen}"/>
                </th>
                <th id="tablehead">${producto.nombre}</th>
                <th id="tablehead">${producto.precio}</th>
                <th id="tablehead">
                <button onclick="quitarDelCarrito(${producto.id})">Quitar</button>
                </th>
            </tr> ` 
};

if(carritoFrutas.length > 0){
    tblody.innerHTML = ""
    carritoFrutas.forEach((producto)=> (tblody.innerHTML += retornarTablaHTML(producto) )
    )
}

btnComprar.addEventListener("click",()=>{
    alert("Muchas Gracias Por Su Compra");
    localStorage.removeItem("carritoFrutas");
    tblody.innerHTML = ""
} )

//ezequiel diaz 21/11/2024

document.addEventListener("DOMContentLoaded",()=>{
   
    const btnVaciarCarrito = document.getElementById('btnVaciarCarrito')
    
    btnVaciarCarrito.addEventListener("click",()=>{
        localStorage.clear()
        window.location.reload()
    })
      
})
