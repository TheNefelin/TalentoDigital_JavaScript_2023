export function Test() {

    // prueba0()
    prueba1()
    // prueba2()
    // prueba3()
}

function prueba0() {
    const asi = async () => {
        await Promise.resolve().then(() => console.log("Console.log Async 2"))
    };

    asi();

    console.log("Console log Console 1");
    
    setTimeout(() => {
        console.log("Console.log TimeOut")
    }, 0);  
    
    Promise.resolve().then(() => {
        console.log("Console log Promesa");
    })

    console.log("Console.log Console 2")

    prueba3()
}

function prueba1() {
    console.log("Console log T1");
    
    console.log("Console log T1");
    setTimeout(() => {
        console.log("Console.log T2")
    }, 0); 

    console.log("Console.log T3")
}

function prueba2() {
    console.log("Console log P1");
    
    Promise.resolve().then(() => {
        console.log("Console log P2");
    })

    console.log("Console.log P3")
}

async function prueba3() {
    await Promise.resolve().then(() => console.log("Console.log Async 1"))
};
