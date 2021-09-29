function facaAContagem() {
  document.getElementById("resultadox").innerHTML = "";

  var numero = document.getElementById("numero").value;
  document.getElementById("numeroEscolhido").innerHTML =
    "O número escolhido foi: " + document.getElementById("numero").value;
  document.getElementById("numero").value = "";
  console.log("teste " + numero);
  contadorRegressivo(numero);
}
function contadorRegressivo(contagem) {
  if (contagem === 1) {
    console.log("chegou ao final");
    document.getElementById("resultadox").innerHTML = "Finalizou a contagem!!!";
    return contagem;
  } else {
    const contagemFinal = contagem - 1;
    console.log(contagemFinal);
    var mostraTela = document.getElementById("resultado");
    mostraTela.innerHTML += "Número " + contagemFinal;

    if (contagemFinal > 1) {
      mostraTela.innerHTML += " - ";
    }
    return contadorRegressivo(contagemFinal);
  }
}
