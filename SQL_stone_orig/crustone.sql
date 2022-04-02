Select polo, stock, Venda, Dias_Hab 	   
From (SELECT  estoque.polo, 
		COUNT(*)   as Venda,
		COUNT(distinct fecha) as Dias_Hab,
	  	estoque.stock
	FROM public.atendimentos
	RIGHT JOIN estoque
	ON (atendimentos.polo = estoque.polo)   
	GROUP BY estoque.polo, estoque.stock) as t
	ORDER BY polo  ASC;