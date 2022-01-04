const db = require('../db')

module.exports = {
    listarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM produtos', (error, results)=>{
                if(error) { rejeitado(error); return; }
                    aceito(results)
            })
        })
    },
    listarProduto: (id) => {
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM produtos WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                    if(results.length > 0){
                        aceito(results[0])
                    }else{
                        aceito(false)
                    }
                })
             })
    }
};