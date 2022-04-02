Select  atendimentos.polo, estoque.stock, 
		COUNT(maquinas) as Venda, 
		COUNT(distinct fecha) as Dias_Hab   
	FROM public.atendimentos
	FULL OUTER JOIN estoque
	ON (atendimentos.polo = estoque.polo)    
	GROUP BY atendimentos.polo, estoque.polo, estoque.stock 
	ORDER BY atendimentos.polo  ASC;