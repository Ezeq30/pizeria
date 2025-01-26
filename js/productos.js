const productos = []
const URL = "js/productos.json"
 

const obtenerProductos = ()=>{  
        fetch(URL)
        .then((Response) => Response.json())
        .then((data) => productos.push(...data))
        
        .then(() => cargarProductos(productos))
}




