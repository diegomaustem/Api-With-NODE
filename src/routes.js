const express = require('express') 
const router = express.Router()

const ProdutoController = require('./controllers/ProdutoController')


/* CRIÇÃO DAS ROTAS DA API */

router.get('/produtos', ProdutoController.listarTodos)
router.get('/produto/:id', ProdutoController.listarProduto)


module.exports = router;


