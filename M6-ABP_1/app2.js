const pagos = [
    {dia:"Domingo", monto: 0, hrs: 0},
    {dia:"Lunes", monto: 7100, hrs: 7},
    {dia:"Martes", monto: 7100, hrs: 8},
    {dia:"Miercoles", monto: 7100, hrs: 7},
    {dia:"Jueves", monto: 7100, hrs: 8},
    {dia:"Viernes", monto: 7100, hrs: 7},
    {dia:"Sabado", monto: 12300, hrs: 5},
];

function pregunta1() {
    process.stdout.write("Fecha Inicio - Formato (AAAA/MM/DD) \n");
    process.stdin.on("data", data => {
        let f1 = new Date(data.toString().trim());
        Date.parse(f1) ? pregunta2(f1) : false;
    });
};

function pregunta2(f1) {
    process.stdout.write("Fecha Termino - Formato (AAAA/MM/DD) \n");
    process.stdin.on("data", data => {
        let f2 = new Date(data.toString().trim());
        Date.parse(f2) ? respuesta(f1, f2) : false;
    });
};

function respuesta(f1, f2) {
    if (f1 > f2) {
        process.stdout.write(`---------------------------------------- \n`);
        process.stdout.write("Fecha Inicio no debe ser mayor a Fecha termino \n");
        process.stdout.write(`---------------------------------------- \n`);
        pregunta1();
    } else {
        var diffDias = parseInt((f2 - f1) / (1000 * 60 * 60 * 24), 10) + 1; 
    
        let semanaHrs = 0;
        let sabHrs = 0;

        for (let i = 0; i < diffDias; i++) {
            f2.setDate(f1.getDate() + i)

            if (f2.getDay() == 6) {
                sabHrs += pagos[f2.getDay()].hrs;
            } else {
                semanaHrs += pagos[f2.getDay()].hrs; 
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
        process.stdout.write(`TOTAL: ${semanaTotal + sabTotal} \n ---------------------------------------- \n`)  

        process.exit();
    };
};

pregunta1();
