Select  atendimentos.polo,
		estoque.stock, 
		COUNT(maquinas) as Venda, 
		COUNT(distinct fecha) as Dias_Hab   
	FROM atendimentos
	left join estoque
	on (atendimentos.polo = estoque.polo)
	WHERE estoque.polo = 'AC - RIO BRANCO'
	GROUP BY atendimentos.polo,
	estoque.polo, estoque.stock 
	ORDER BY atendimentos.polo  ASC;
	