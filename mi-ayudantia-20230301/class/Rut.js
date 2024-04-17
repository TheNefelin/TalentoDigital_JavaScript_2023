export class Rut {
    #numVer;

    constructor() {
        this.#numVer = 0;
    };

    getNumVerificador(num) {
        let mult = 1;
        let acum = 0;

        for (let i = num.length -1; i >= 0 ; i--){
            if (mult < 7) {
                mult += 1;
            } else {
                mult = 2;
            };

            acum += (mult * parseInt(num[i]));
        };

        return 11 - (acum % 11);
    };
};
