import { Router } from "express";
import {
    criarProducao,
    buscarProducao,
    buscarProducaoPorMes,
    alterarProducaoKg,
    deletarProduto
} from "../controllers/Producao.controller.js";

const producaoRoute = Router();

producaoRoute.post("/nova-producao", (req, res) => {
    const { mes, producaoKg } = req.body;
    const novaProducao = criarProducao(mes, producaoKg);
    res.json({novaProducao});
});

producaoRoute.get("/lista-producao", (req, res) => {
    const listaProducao = buscarProducao();
    res.json({listaProducao});
});

producaoRoute.get("/producao-find", (req, res) => {
    const { mes } = req.body;
    const producaoFind = buscarProducaoPorMes(mes);
    res.json({producaoFind});
});

producaoRoute.put("/alterar-producao", (req, res) => {
    const { mes, producaoKg, novaProducaoKg } = req.body;
    const producaoAlterada = alterarProducaoKg(mes, producaoKg, novaProducaoKg);
    res.json({producaoAlterada});
});

producaoRoute.delete("/deletar-producao", (req, res) => {
    const { id, mes } = req.body;
    const delProducao = deletarProduto(id, mes);
    res.json({delProducao});
});

export { producaoRoute }