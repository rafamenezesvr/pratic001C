// function enviaCarta(amount) {
//   console.log("Carta " + amount + " enviada");
//   if (amount === 1) {
//     return amount;
//   } else {
//     let amountRemaining = amount - 1;
//     console.log("chamando função novamente");
//     return enviaCarta(amountRemaining);
//   }
// }
//enviaCarta(10);
// function facaAContagem() {
//   //enviaCarta(10);
//   contagemRegressiva(5);
// }
// function contagemRegressiva(contagem) {
//   console.log("contando a quantidade é " + contagem);
//   if (contagem === 1) {
//     return contagem;
//   } else {
//     let contagemAtualizada = contagem - 1;
//     return contagemRegressiva(contagemAtualizada);
//   }
// }

// function enviaCarta(amount) {
//   console.log("Carta " + amount + " enviada");
//   if (amount === 1) {
//     return amount;
//   } else {
//     let amountRemaining = amount - 1;
//     console.log("chamando função novamente");
//     return enviaCarta(amountRemaining);
//   }
// }
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