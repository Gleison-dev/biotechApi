class Usuario{
    constructor(nome, email, senha, cpf){
        this.id = Math.floor(Math.random() * 100);
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
export { Usuario }