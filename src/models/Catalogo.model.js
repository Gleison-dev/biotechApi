import { v4 as uuidv4 } from "uuid";
class Catalogo{
    constructor(nome, preco){
        this.id = uuidv4();
        this.nome = nome;
        this.preco = preco
    }
}

export { Catalogo }