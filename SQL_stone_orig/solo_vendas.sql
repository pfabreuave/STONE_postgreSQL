Select polo, Venda, Dias_Hab 	   
From (SELECT atendimentos.polo,    
		COUNT(*)   as Venda,
		COUNT(distinct fecha) as Dias_Hab
	FROM public.atendimentos   
	GROUP BY polo) as t
	ORDER BY polo  ASC;