import { v4 as uuidv4 } from "uuid";
class Producao{
    constructor(mes, producaoKg){
        this.id = uuidv4();
        this.mes = mes;
        this.producaoKg = producaoKg;
    }
}

export { Producao }