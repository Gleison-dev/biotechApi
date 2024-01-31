import { Usuario } from "../models/Usuario.model.js";

let listaUsuario = [
    {
        id: Math.floor(Math.random() * 100),
        nome: "Ana",
        email: 'ana@email.com',
        senha: '123456',
        cpf: "123.456.789-00"
    }
];

// CREATE
function criarUsuario(nome, email, senha, cpf){
    const novoUsuario = new Usuario(nome, email, senha, cpf);
    listaUsuario.push(novoUsuario);
    return novoUsuario;
}

// READ
function buscarTodosUsuarios(){
    return listaUsuario;
}

// READ
function buscarUsuarioPorNome(nome){
    const usuario = listaUsuario.find(data => data.nome === nome);
    if(usuario){
        return usuario;
    }else{
        return "Usuário não encontrado!"
    }
}

// UPDATE
function alterarSenha(email, senha, novaSenha){
    const usuario = listaUsuario.find(data => data.email === email);
    if(usuario){
        let index = listaUsuario.findIndex(data => data.senha === senha);
        listaUsuario[index].senha = novaSenha;
        return listaUsuario[index];
    }else{
        return "Usuário não encontrado!"
    }
}

// DELETE
function deletarUsuario(email, senha){
    const usuario = listaUsuario.find(data => data.email === email);
    if(usuario){
        let index = listaUsuario.findIndex(data => data.senha === senha);
        listaUsuario.splice(index, 1);
        return listaUsuario;
    }else{
        return "Usuário não encontrado!"
    }
}

export { criarUsuario, buscarTodosUsuarios, buscarUsuarioPorNome, alterarSenha,  deletarUsuario };