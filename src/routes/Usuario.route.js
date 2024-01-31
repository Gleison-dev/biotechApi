import { Router } from "express";
import {
    criarUsuario,
    buscarTodosUsuarios,
    buscarUsuarioPorNome,
    alterarSenha,
    deletarUsuario
} from "../controllers/Usuario.controller.js";

const usuarioRoute = Router();

usuarioRoute.post("/novo-usuario", (req, res) => {
    const { nome, email, senha, cpf } = req.body;
    const novoUsuario = criarUsuario(nome, email, senha, cpf);
    res.json({novoUsuario});
});

usuarioRoute.get("/lista-usuarios", (req, res) => {
    const usuarios =  buscarTodosUsuarios();
    res.json({usuarios});
});

usuarioRoute.get("/usuario-find", (req, res) => {
    const { nome } = req.body;
    const usuarioFind = buscarUsuarioPorNome(nome);
    res.json({usuarioFind});
});

usuarioRoute.put("/alterar-senha", (req, res) => {
    const { email, senha, novaSenha } = req.body;
    const senhaAlterada = alterarSenha(email, senha, novaSenha);
    res.json({senhaAlterada});
});

usuarioRoute.delete("/deletar-usuario", (req, res) => {
    const { email, senha } = req.body;
    const delUsuario = deletarUsuario(email, senha);
    res.json({delUsuario});
});

export { usuarioRoute }