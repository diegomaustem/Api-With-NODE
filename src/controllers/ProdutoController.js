const ProdutoService = require('../services/ProdutoService')

module.exports = {
    listarTodos: async (require, response)=> {
        let json = {error:'', result:[]}

        let produtos = await ProdutoService.listarTodos();

        for(let i in produtos){
            json.result.push({
                id: produtos[i].id,
                nome: produtos[i].nome,
                imagem: produtos[i].imagem,
                descricao: produtos[i].descricao,
                estoque: produtos[i].estoque,
                status: produtos[i].status,
                preco: produtos[i].preco
            })
        }
        response.json(json)
    }, 
    
    listarProduto: async (require, response)=>{
        let json = {error:'', result:{}}

        let id = require.params.id
        let produto = await ProdutoService.listarProduto(id)

        if(produto){
            json.result = produto;
        }
        response.json(json)

    }
}




