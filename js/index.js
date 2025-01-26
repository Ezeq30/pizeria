// const productos = []
// const URL = "js/productos.json"


const container = document.querySelector('div.container') 

retonarCarHtml = (producto) => {
    return `<div class="card">
                <div class="card-image">
                <img class="cardProdImg" src="${producto.imagen}"/>
                </div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

const activarClickEnBotones = ()=> {
    const BotonesAgregar = document.querySelectorAll('button.button-outline.button-add')
    if(BotonesAgregar !== null){
        BotonesAgregar.forEach((button)=>{
            button.addEventListener('click',(e)=>{
                agregarAlCarrito(e.target.id)
            })
        })
    }
}

const cargarProductos = (array) => {
    if(array.length > 0){
        array.forEach(producto => {
            container.innerHTML += retonarCarHtml(producto)
        });
        activarClickEnBotones()
    }
}


// const cargarProductos = (array) => {
//     if(array.length > 0){
//         array.forEach(producto => {
//             container.innerHTML += retonarCarHtml(producto)
//         });
//         activarClickEnBotones()
//     }
// }

// const obtenerProductos = ()=>{  
//         fetch(URL)
//         .then((Response) => Response.json())
//         .then((data) => productos.push(...data))
        
//         .then(() => cargarProductos(productos))
// }


// obtenerProductos()
document.addEventListener("DOMContentLoaded",()=>{
    obtenerProductos()
 
   
    
})

