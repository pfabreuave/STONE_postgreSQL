Select polo, Venda, Dias_Hab, stock  	   
From (SELECT atendimentos.polo,    
		COUNT(*)   as Venda,
		COUNT(distinct fecha) as Dias_Hab,
	  	estoque.stock
	FROM public.atendimentos
	LEFT JOIN estoque
	ON (atendimentos.polo = estoque.polo)    
	GROUP BY atendimentos.polo, estoque.polo, estoque.stock) as t
	ORDER BY polo  ASC;