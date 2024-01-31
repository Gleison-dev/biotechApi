import { Producao } from "../models/Producao.model.js";

let listaProducao = [
    {
        id: Math.floor(Math.random() * 100),
        mes: "Janeiro",
        producaoKg: 56
    },
    {
        id: Math.floor(Math.random() * 100),
        mes: "Fevereiro",
        producaoKg: 99
    },
    {
        id: Math.floor(Math.random() * 100),
        mes: "Março",
        producaoKg: 78
    }
];

function criarProducao(mes, producaoKg){
    const novaProducao = new Producao(mes, producaoKg);
    listaProducao.push(novaProducao);
    return novaProducao;
}

function buscarProducao(){
    return listaProducao;
}

function buscarProducaoPorMes(mes){
    const producao = listaProducao.find(data => data.mes === mes);
    if(producao){
        return producao;
    }else{
        return "Mês não encontrado, tente novamente!"
    }
}

function buscarProducaoPorProducaoKg(producaoKg){
    const producao = listaProducao.find(data => data.producaoKg === producaoKg);
    if(producao){
        return producao;
    }else{
        return "Dados incorretos!"
    }
}

function alterarProducaoKg(mes, producaoKg, novaProducaoKg){
    const producao = listaProducao.find(data => data.mes === mes);
    if(producao){
        let index = listaProducao.findIndex(data => data.producaoKg == producaoKg);
        listaProducao[index].producaoKg = novaProducaoKg;
        return listaProducao[index];
    }else{
        return "Mês não encontrado, tente novamente!"
    }
}

function deletarProduto(id, mes){
    const producao = listaProducao.find(data => data.id === id);
    if(producao){
        let index = listaProducao.findIndex(data => data.mes === mes);
        listaProducao.splice(index, 1);
        return listaProducao;
    }else{
        return "Mês não encontrado, tente novamente!"
    }
}

export { criarProducao, buscarProducao, buscarProducaoPorMes, buscarProducaoPorProducaoKg, alterarProducaoKg, deletarProduto }