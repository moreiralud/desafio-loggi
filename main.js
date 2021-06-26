const prompt = require("prompt-sync")();
const funcoes = require("./funcoes");

funcoes.autenticaTodosPacotes();

console.log("Sistema Loggi");
console.log("Digite 1 para identificar o destino de cada pacote");
console.log(
  "Digite 2 para Saber quais pacotes possuem códigos de barras válidos e/ou inválidos"
);
console.log(
  "Digite 3 para Identificar se algum pacote que tem como origem a região Sul tem Brinquedos em seu conteúdo"
);
console.log(
  "Digite 4 para Listar os pacotes agrupados por região de destino (Considere apenas pacotes válidos)."
);
console.log(
  "Digite 5 para Listar o número de pacotes enviados por cada vendedor (Considere apenas pacotes válidos)."
);
console.log(
  "Digite 6 para listar  Gerar o relatório/lista de pacotes por destino(Considere apenas pacotes válidos)"
);
console.log(
  "Digite 7 para listar  Gerar o relatório/lista de pacotes por por tipo (Considere apenas pacotes válidos)"
);

var opcaoDigitada = prompt("Digite a opção desejada: ");

if (opcaoDigitada === "1") {
  funcoes.listaDestinoPacote();
} else if (opcaoDigitada === "2") {
  funcoes.imprimeListaPacotesValidos();
} else if (opcaoDigitada === "3") {
  funcoes.listaBrinquedosRegiaoSul();
} else if (opcaoDigitada === "4") {
  funcoes.imprimePacotesValidosAgrupadosPorRegiao();
} else if (opcaoDigitada === "5") {
  funcoes.imprimePacotesValidosAgrupadosPorVendedor();
} else if (opcaoDigitada === "6") {
  funcoes.imprimePacotesValidosAgrupadosPorDestino();
} else if (opcaoDigitada === "7") {
  funcoes.imprimePacotesValidosAgrupadosPorProduto();
} else {
  console.log("Opção inválida!");
}
