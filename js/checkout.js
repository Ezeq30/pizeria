let cardNuevo = []
const tblody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#btnComprar")
// const total = document.querySelector("total")

const retornarTablaHTML =(producto) =>{ 
    
   return ` <tr>
                <th id="tablehead">
                <img class="chekimg" src="${producto.imagen}"/>
                </th>
                <th id="tablehead">${producto.nombre}</th>
                <th id="tablehead">${producto.precio}</th>
                <th id="tablehead">${producto.cantidad}</th>
                <th id="tablehead">
                <button onclick="quitarCardNuevo(${producto.id})">Quitar</button>
                </th>
            </tr> ` 
};
///retorna los productos al carrito

if(carritoFrutas.length > 0){
    tblody.innerHTML = ""
    const mapa = new Map() 
    carritoFrutas.forEach((producto)=>{
        if(!mapa.has(producto.id)){
            mapa.set(producto.id,{...producto,cantidad:1})
        }else{
            const item = mapa.get(producto.id)
            item.cantidad +=1
            item.precio += producto.precio
        }
    })
    
    cardNuevo = Array.from (mapa.values())

    cardNuevo.forEach((producto)=> {

    return (tblody.innerHTML += retornarTablaHTML(producto) )
    }
)

/// boton quitar
}
const quitarCardNuevo =(id)=>{


    if(cardNuevo.length > 0 ){
       for(let i = 0; i<cardNuevo.length; i++){
        if(cardNuevo[i].id === id){
            cardNuevo[i].cantidad -=1
            
        }
       
        console.log(cardNuevo.length)
        console.log(cardNuevo[i])

       }
       retornarTablaHTML(cardNuevo)
    }
}



btnComprar.addEventListener("click",()=>{
    console.log('productos en el carrito',cardNuevo)
    if(cardNuevo.length <= 0){
        alert('Su carrito esta vacio')
        return
    }
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

const total = document.querySelector("total")

