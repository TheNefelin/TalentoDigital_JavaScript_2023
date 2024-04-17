const carrito = [];

export function Promesa() {
    console.log("Voy de Compras")
    // compras()

    // const irDeCompra = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         carrito.push("Azucar")
    
    //         setTimeout(() => {
    //             carrito.push("Pan")
    
    //             setTimeout(() => {
    //                 carrito.push("Copete")
    
    //                 setTimeout(() => {
    //                     carrito.push("Papitas Lays")
                        
    //                     resolve(carrito);
    //                 }, 2000);
    //             }, 2000);
    //         }, 2000);
    //     }, 2000)
    // })
    
    // irDeCompra.then(data => {
    //     console.log(data);
    //     console.log("Renderizando mi Carrito");
    // })

    // comprar("frutas", 5000)
    // .then(() => comprar("comida pal Gato", 1000))
    // .then(() => comprar("Copete", 2000))
    // .then(() => console.log(carrito))

    // Promise.all([
    //     comprar("comida pal Gato", 1000),
    //     comprar("Copete", 2000),
    //     comprar("frutas", 5000),
    //     comprar("Papas Lays", 2000)
    // ])
    // .then(() => {
    //     console.log(carrito)
    //     console.log("Renderizare utilizando el DOM")
    // });

    comprarDeNuevo(comprar("comida pal Gato", 1000)),
    comprarDeNuevo(comprar("Copete", 2000)),
    comprarDeNuevo(comprar("frutas", 5000)),
    comprarDeNuevo(comprar("Papas Lays", 2000))


} 

async function comprarDeNuevo(callback) {
    await callback
    console.log(carrito)
}

function comprar(prod, seg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Comprando: ${prod}`)
            carrito.push(prod)
            resolve(carrito)
        }, seg)
    })
}

// function compras() {
//     setTimeout(() => {
//         carrito.push("Azucar")

//         setTimeout(() => {
//             carrito.push("Pan")

//             setTimeout(() => {
//                 carrito.push("Copete")

//                 setTimeout(() => {
//                     carrito.push("Papitas Lays")

//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000)
// }