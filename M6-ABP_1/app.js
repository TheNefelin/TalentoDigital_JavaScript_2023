const pagos = [
    {dia:"Domingo", monto: 0, hrs: 0},
    {dia:"Lunes", monto: 7100, hrs: 7},
    {dia:"Martes", monto: 7100, hrs: 8},
    {dia:"Miercoles", monto: 7100, hrs: 7},
    {dia:"Jueves", monto: 7100, hrs: 8},
    {dia:"Viernes", monto: 7100, hrs: 7},
    {dia:"Sabado", monto: 12300, hrs: 5},
];

process.stdout.write(`---------------------------------------- \n`)  
let preguntas = ["Fecha Inicio - Formato (AAAA/MM/DD) \n", "Fecha Termino - Formato (AAAA/MM/DD) \n"];
let respuestas = [];

function preguntar(indice){
    process.stdout.write(preguntas[indice])
};

process.stdin.on('data', (data) => {
    const fecha = new Date(data.toString().trim())
    // AAAA/MM/DD
    respuestas.push(fecha);
    if(respuestas.length < preguntas.length){
        preguntar(respuestas.length);
    }else{
        if (respuestas[0] > respuestas[1]) {
            process.stdout.write(`---------------------------------------- \n`);
            process.stdout.write("Fecha Inicio no debe ser mayor a Fecha termino \n");
            process.stdout.write(`---------------------------------------- \n`);
            respuestas = [];
            preguntar(0);
        } else {
            var date1 = new Date(respuestas[0]);
            var date2 = new Date(respuestas[1]);
            var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10) + 1; 

            let semanaHrs = 0;
            let sabHrs = 0;

            for (let i = 0; i < diffDays; i++) {
                date2.setDate(date1.getDate() + i)
    
                if (date2.getDay() == 6) {
                    sabHrs += pagos[date2.getDay()].hrs;
                } else {
                    semanaHrs += pagos[date2.getDay()].hrs; 
                };
            };
            
            let semanaTotal = pagos[5].monto * semanaHrs;
            let sabTotal = pagos[6].monto * sabHrs;

            process.stdout.write(`---------------------------------------- \n`)  
            process.stdout.write(`CANTIDAD HORAS LU-VI: ${semanaHrs} \n`)
            process.stdout.write(`VALOR HORA: ${pagos[5].monto} \n`)
            process.stdout.write(`SUBTOTAL LU-VI: ${semanaTotal} \n`)
            process.stdout.write(`\n`)            
            process.stdout.write(`CANTIDAD HORAS LU-VI: ${sabHrs} \n`)
            process.stdout.write(`VALOR HORA: ${pagos[6].monto} \n`)
            process.stdout.write(`SUBTOTAL LU-VI: ${sabTotal} \n`)
            process.stdout.write(`\n`)       
            process.stdout.write(`TOTAL: ${semanaTotal + sabTotal} \n ----------------------------------------`)  

            process.exit();
        }
    };
});

preguntar(0);

