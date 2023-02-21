function gerarTabela () {
    var breadPrice = parseFloat(document.getElementById("breadPrice").value);
    var tablePrice = document.getElementById('tablePrice');
    var item = '';
    
    for (var i=1; i<= 50; i++)
    item += i+" unid. = R$" + breadPrice * i+"<br/>";
    tablePrice.innerHTML = item;
    }