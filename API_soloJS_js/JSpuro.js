/*
    consumo API con javascript puro
*/
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function creaFila(stock) {
    
    fila = document.createElement("tr");
    tdPolo = document.createElement("td");
    tdStk = document.createElement("td");
    tdVenda = document.createElement("td");
    tdDias_Hab = document.createElement("td");
    tdMedia = document.createElement("td");
    tdAuto = document.createElement("td");
    tdCat = document.createElement("td");
    tdRep = document.createElement("td");

    tdPolo.innerHTML = stock.polo
    tdStk.innerHTML = stock.stock
    tdVenda.innerHTML = stock.venda
    tdDias_Hab.innerHTML = stock.dias_hab
    tdMedia.innerHTML = stock.media
    tdAuto.innerHTML = stock.auto
    tdCat.innerHTML = stock.cat
    tdRep.innerHTML = stock.rep

    fila.appendChild(tdPolo);
    fila.appendChild(tdStk);
    fila.appendChild(tdVenda);
    fila.appendChild(tdDias_Hab);
    fila.appendChild(tdMedia);
    fila.appendChild(tdAuto);
    fila.appendChild(tdCat);
    fila.appendChild(tdRep);
    

    return fila;

}


function consume_API() {
    let data = fazGet("http://localhost:4000/api/stocks/");
    let polos = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    
    for(j=0;j<polos.stock.length;j++){ 
                    let fila = creaFila(polos.stock[j]);
                    tabela.appendChild(fila);
		}
   
}

consume_API()
