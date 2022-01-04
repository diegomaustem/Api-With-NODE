const express = require('express') 
const router = express.Router()

const ProdutoController = require('./controllers/ProdutoController')


router.get('/produtos', ProdutoController.listarTodos)
router.get('/produto/:id', ProdutoController.listarProduto)
router.post('/produto', ProdutoController.inserirProduto)
router.put('/produto/:id', ProdutoController.alterarProduto)


module.exports = router;


