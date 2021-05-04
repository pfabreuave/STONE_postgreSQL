

const router = require("express-promise-router")();
const stockController = require("../controllers/stock.controller");

// ==> Definindo as rotas da API- 'Stock':

// ==> Rota responsável por criar um novo 'Stock': (POST): localhost:4000/api/stock/:polo
router.post("/stock/:polo", stockController.AddStock);

// ==> Rota responsável por listar  os 'Stock'por polo: (GET): localhost:4000/api/stock/:polo
router.get("/stock/:polo", stockController.listAllStock);

// ==> Rota responsável por consolidar a tabela de atendimento por pólo: (GET): localhost:4000/api/stock/
router.get("/stock/", stockController.SumAllStock);

module.exports = router;
