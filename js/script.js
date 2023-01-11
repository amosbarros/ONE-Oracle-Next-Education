var entradaTexto;
var saidaCripto;
var saidaDescrip;

function cripitoTx() {
    var entradaTexto = document.getElementById("area-tx").value;
    saidaCripto = entradaTexto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    document.getElementById("resultado").innerHTML = saidaCripto;
}

function descriptoTx() {
    var entradaTexto = document.getElementById("area-tx").value;
    saidaDescrip = entradaTexto.replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ai/g, "a").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");
    document.getElementById("resultado").innerHTML = saidaDescrip;
}
