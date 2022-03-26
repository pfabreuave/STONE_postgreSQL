/*
    Nesta seção serão definidos os critérios de seleção e cálculo dos dados.
*/

const db = require("../config/database");
/*
  consolidação de todos os POLOS das tabelas ATENDIMENTO e STOCK
*/
    exports.SumAllStock = async (req, res) => {
    const response = await db.query(
    `SELECT polo, stock, venda, dias_hab,
            ceil(venda / dias_hab) as media,
            ceil(stock / (venda / dias_hab) )  as auto,
            CASE WHEN (ceil(stock / (Venda / Dias_Hab))) < 10 THEN 1
            WHEN (ceil(stock / (Venda / Dias_Hab))) >= 10 AND (ceil(stock / (Venda / Dias_Hab))) <= 13 THEN 2
            WHEN (ceil(stock / (Venda / Dias_Hab))) >= 14 AND (ceil(stock / (Venda / Dias_Hab))) <= 18 THEN 3
            WHEN (ceil(stock / (Venda / Dias_Hab))) >= 19 AND (ceil(stock / (Venda / Dias_Hab))) <= 23 THEN 4
            ELSE 5 END
            AS cat,
            CASE WHEN (ceil(stock / (Venda / Dias_Hab))) >= 14 AND (ceil(stock / (Venda / Dias_Hab))) <= 18 THEN 0
            ELSE (14 - (ceil(stock / (Venda / Dias_Hab)))) * ceil(Venda / Dias_Hab) END AS rep
    FROM (SELECT  atendimentos.polo, 
          COUNT(*) as venda,
          COUNT(distinct fecha) as dias_hab,
          estoque.stock
          FROM public.atendimentos
    JOIN estoque
    ON (atendimentos.polo = estoque.polo)   
    GROUP BY atendimentos.polo, estoque.stock) as t`,
  );
    res.status(200).send({
    stock: response.rows,
    }); 
  };

  /*
    consolidação de um POLO, a partir das tabelas ATENDIMENTO e STOCK
  */
  
      exports.listOneStock = async (req, res) => {
      const polo = req.body.polo;
      const response = await db.query(
      `SELECT polo, stock, venda, dias_hab, 
              ceil(venda / dias_hab) as media,
              ceil(stock / (venda / dias_hab) )  as auto,
              CASE WHEN (ceil(stock / (Venda / Dias_Hab))) < 10 THEN 1
              WHEN (ceil(stock / (Venda / Dias_Hab))) >= 10 AND (ceil(stock / (Venda / Dias_Hab))) <= 13 THEN 2
              WHEN (ceil(stock / (Venda / Dias_Hab))) >= 14 AND (ceil(stock / (Venda / Dias_Hab))) <= 18 THEN 3
              WHEN (ceil(stock / (Venda / Dias_Hab))) >= 19 AND (ceil(stock / (Venda / Dias_Hab))) <= 23 THEN 4
              ELSE 5 END
              AS cat,
              CASE WHEN (ceil(stock / (Venda / Dias_Hab))) >= 14 AND (ceil(stock / (Venda / Dias_Hab))) <= 18 THEN 0
              ELSE (14 - (ceil(stock / (Venda / Dias_Hab)))) * ceil(Venda / Dias_Hab) END AS rep
      FROM (SELECT  atendimentos.polo, 
              COUNT(*) as venda,
              COUNT(distinct fecha) as dias_hab,
              estoque.stock
      FROM public.atendimentos
           JOIN estoque
           ON (atendimentos.polo = estoque.polo) 

           WHERE estoque.polo LIKE '%' || $1 || '%'  
           GROUP BY atendimentos.polo, estoque.stock) as t`, 
        [polo]               
        );
      res.status(200).send({
        stock: response.rows,
      }); 
    };
    
    /*
       Atualização do STOCK de um Polo na Tabela de ESTOQUE
    */
  exports.AddStock = async (req, res) => {
  const polo = req.body.polo;
  const stock = req.body.stock;
 
  const response = await db.query(
    "UPDATE estoque SET stock = $1 WHERE polo LIKE '%' || $2 || '%'",
    [stock, polo]
  );
  //res.status(200).send(console.log("estoque atualizado " + response.rows+ " " +polo)) ;
  res.status(200).send({
    stock: [polo, stock],
  }); 
};
