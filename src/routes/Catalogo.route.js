import { Router } from "express";
import {
    criarCatalogo,
    buscarCatalogo,
    buscarProdutoPorNome,
    alterarPreco,
    deletarProduto
} from "../controllers/Catalogo.controller.js";

const catalogoRoute = Router();

catalogoRoute.post("/novo-catalogo", (req, res) => {
    const { nome, preco } = req.body;
    const novoCatalogo = criarCatalogo(nome, preco);
    res.json({novoCatalogo});
});

catalogoRoute.get("/lista-catalogo", (req, res) => {
    const catalogo = buscarCatalogo();
    res.json({catalogo});
});

catalogoRoute.get("/produto-find", (req, res) => {
    const { nome } = req.body;
    const produtoFind = buscarProdutoPorNome(nome);
    res.json({produtoFind});
});

catalogoRoute.put("/alterar-preco", (req, res) => {
    const { nome, preco, novoPreco } = req.body;
    const precoAlterado = alterarPreco(nome, preco, novoPreco);
    res.json({precoAlterado});
});

catalogoRoute.delete("/delete-produto", (req, res) => {
    const { id, nome } = req.body;
    const delProduto = deletarProduto(id, nome);
    res.json({delProduto});
});

export { catalogoRoute }