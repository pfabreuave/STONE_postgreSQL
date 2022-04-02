

const router = require("express-promise-router")();
const stockController = require("../controllers/stock.controller");

// ==> Definindo as rotas da API- 'Stock':

// ==> Rota responsável por criar um novo 'Stock': (POST): localhost:4000/api/stock/
router.post("/stock/", stockController.UpdStock);

// ==> Rota responsável por listar  os 'Stock'por polo: (POST): localhost:4000/api/stockp/
router.post("/stockp/", stockController.ListOneStock);

// ==> Rota responsável por consolidar a tabela de atendimento por pólo: (GET): localhost:4000/api/stocks/
router.get("/stocks/", stockController.SumAllStock);


module.exports = router;
