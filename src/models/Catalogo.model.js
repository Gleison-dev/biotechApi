class Catalogo{
    constructor(nome, preco){
        this.id = Math.floor(Math.random() * 100);
        this.nome = nome;
        this.preco = preco
    }
}

export { Catalogo }