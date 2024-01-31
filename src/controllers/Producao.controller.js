import { Producao } from "../models/Producao.model.js";

let listaProducao = [];

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

export { criarProducao, buscarProducao, buscarProducaoPorMes, alterarProducaoKg, deletarProduto }