class Producao{
    constructor(mes, producaoKg){
        this.id = Math.floor(Math.random() * 100);
        this.mes = mes;
        this.producaoKg = producaoKg;
    }
}

export { Producao }