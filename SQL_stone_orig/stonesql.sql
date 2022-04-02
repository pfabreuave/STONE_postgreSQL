Select polo, stock, Venda, Dias_Hab, 
	   (Venda / Dias_Hab) as Promedio,
	   (Venda / Dias_Hab * 14) as Verde,
	   (Venda / Dias_Hab * 10) as Vermelo_N,
	   (Venda / Dias_Hab * 13) as Amarelo_N,
	   (Venda / Dias_Hab * 19) as Amarelo_p,
	   (Venda / Dias_Hab * 23) as Vermelo_p,
	   (stock / (Venda / Dias_Hab) )  as real
  
From (SELECT  atendimentos.polo, 
		COUNT(*) as Venda,
		COUNT(distinct fecha) as Dias_Hab,
	  	estoque.stock
	FROM public.atendimentos
	JOIN estoque
	ON (atendimentos.polo = estoque.polo)   
	GROUP BY atendimentos.polo, estoque.stock) as t
	ORDER BY polo  ASC;

	Select polo, stock, Venda, Dias_Hab, 
	   ceil(Venda / Dias_Hab) as Promedio,
	   ceil(Venda / Dias_Hab * 14) as Verde,
	   ceil(Venda / Dias_Hab * 10) as Vermelo_N,
	   ceil(Venda / Dias_Hab * 13) as Amarelo_N,
	   ceil(Venda / Dias_Hab * 19) as Amarelo_p,
	   ceil(Venda / Dias_Hab * 23) as Vermelo_p,
	   ceil(stock / (Venda / Dias_Hab) )  as real
  
From (SELECT  atendimentos.polo, 
		COUNT(*) as Venda,
		COUNT(distinct fecha) as Dias_Hab,
	  	estoque.stock
	FROM public.atendimentos
	JOIN estoque
	ON (atendimentos.polo = estoque.polo)   
	GROUP BY atendimentos.polo, estoque.stock) as t
	ORDER BY polo  ASC;