import { v4 as uuidv4 } from "uuid";
class Usuario{
    constructor(nome, email, senha, cpf){
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
export { Usuario }