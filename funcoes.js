const prompt = require("prompt-sync")();

pacotesLoggi = [
  "888555555123888",
  "333333555584333",
  "222333555124000",
  "000111555874555",
  "111888555654777",
  "111333555123333",
  "555555555123888",
  "888333555584333",
  "111333555124000",
  "333888555584333",
  "555888555123000",
  "111888555123555",
  "888000555845333",
  "000111555874000",
  "111333555123555"
];
pacotesAutenticados = [];
pacotesInvalidos = [];

regiaoNordeste = [];
regiaoCentroOeste = [];
regiaoNorte = [];
regiaoSudeste = [];
regiaoSul = [];

listaVendedores = [];

chavesRegioes = [];

var pacotesAgrupadosPorDestino = new Map();

var pacotesPorVendedor = new Map();

var pacotesPorProduto = new Map();

var regioes = new Map();
regioes.set("111", "Centro-Oeste");
regioes.set("333", "Nordeste");
regioes.set("555", "Norte");
regioes.set("888", "Sudeste");
regioes.set("000", "Sul");

var produto = new Map();
produto.set("000", "Joias");
produto.set("111", "livros");
produto.set("333", "eletronicos");
produto.set("555", "bebidas");
produto.set("888", "brinquedos");

function autenticaTodosPacotes() {
  pacotesLoggi.forEach((element) => {
    if (!validaCaracteres(element)) {
      pacotesInvalidos.push(element);
      return;
    }
    if (!validaTipoProduto(element)) {
      pacotesInvalidos.push(element);
      return;
    }
    if (!validaJoiasCentroOeste(element)) {
      pacotesInvalidos.push(element);
      return;
    }
    if (!validaVendedor(element)) {
      pacotesInvalidos.push(element);
      return;
    }

    pacotesAutenticados.push(element);
  });
}

function validaCaracteres(element) {
  if (element.length !== 15) {
    return false;
  } else {
    return true;
  }
}

function validaTipoProduto(element) {
  codTipoProduto = element.substring(12, 15);
  codAceitos = ["000", "111", "333", "555", "888"];

  return codAceitos.includes(codTipoProduto);
}

function validaJoiasCentroOeste(element) {
  var codRegiaoJoias = element.substring(0, 2);

  if (element === "000" && codRegiaoJoias) {
    return false;
  } else return true;
}

function validaVendedor(element) {
  codVendedor = element.substring(9, 12);
  if (codVendedor === "584") {
    return false;
  } else return true;
}

function listaDestinoPacote() {
  listaRegioesChaveValor();
}

function listaRegioesChaveValor() {
  pacotesLoggi.forEach((element) => {
    console.log(
      "Pacote: " + element + ", região: " + regioes.get(element.substring(3, 6))
    );
  });
}

function listaBrinquedosRegiaoSul() {
  var encontrou = false;
  pacotesLoggi.forEach((element) => {
    var encontrou = false;
    var regiaoSul = element.substring(0, 3);
    var brinquedo = element.substring(12, 15);

    if (regiaoSul === "000" && brinquedo === "888") {
      encontrou = true;
      console.log('Pacotes encontrados:')
      console.log(element)
    }
  });

  if (!encontrou) {
    console.log("não há mais pacotes");
  }
}

function imprimeListaPacotesValidos() {
  console.log("Pacotes autenticados: ");
  console.log(pacotesAutenticados);
  console.log(" Pacotes Inválidos: ");
  console.log(pacotesInvalidos);
}

function imprimePacotesValidosAgrupadosPorRegiao() {
  pacotesAutenticados.forEach((element) => {
    if (element.substring(3, 6) === "333") {
      regiaoNordeste.push(element);
      return;
    }
    if (element.substring(3, 6) === "111") {
      regiaoCentroOeste.push(element);
      return;
    }
    if (element.substring(3, 6) === "555") {
      regiaoNorte.push(element);
      return;
    }
    if (element.substring(3, 6) === "888") {
      regiaoSudeste.push(element);
      return;
    }
    if (element.substring(3, 6) === "000") {
      regiaoSul.push(element);
    }
  });

  console.log("REGIÃO DE DESTINO DOS PACOTES VÁLIDOS");
  console.log("Região de Destino Nordeste: ");
  console.log(regiaoNordeste);
  console.log("Região de Destino Centro-Oeste: ");
  console.log(regiaoCentroOeste);
  console.log("Região de Destino Norte: ");
  console.log(regiaoNorte);
  console.log("Região de Destino Sudeste");
  console.log(regiaoSudeste);
  console.log("Região de Destino Sul: ");
  console.log(regiaoSul);
}

function imprimePacotesValidosAgrupadosPorVendedor() {
  pacotesAutenticados.forEach((element) => {
    if (pacotesPorVendedor.get(element.substring(9, 12)) === undefined) {
      pacotesPorVendedor.set(element.substring(9, 12), [element]);
    } else {
      pacotesPorVendedor.get(element.substring(9, 12)).push(element);
    }
  });

  console.log("====");
  console.log("PACOTES POR VENDEDOR");
  console.log("====");

  pacotesPorVendedor.forEach((value, key) => {
    console.log("Código do Vendedor: " + key);
    console.log("Pacotes:");
    console.log(value);
  });
}

function imprimePacotesValidosAgrupadosPorDestino() {
  pacotesAutenticados.forEach((element) => {
    if (pacotesAgrupadosPorDestino.get(element.substring(3, 6)) === undefined) {
      pacotesAgrupadosPorDestino.set(element.substring(3, 6), [element]);
    } else {
      pacotesAgrupadosPorDestino.get(element.substring(3, 6)).push(element);
    }
  });

  console.log("====");
  console.log("PACOTES POR DESTINO");
  console.log("====");

  pacotesAgrupadosPorDestino.forEach((value, key) => {
    console.log("Código do Destino: " + regioes.get(key));
    console.log("Pacotes:");
    console.log(value);
  });
}

function imprimePacotesValidosAgrupadosPorProduto() {
  pacotesAutenticados.forEach((element) => {
    if (pacotesPorProduto.get(element.substring(12, 15)) === undefined) {
      pacotesPorProduto.set(element.substring(12, 15), [element]);
    } else {
      pacotesPorProduto.get(element.substring(12, 15)).push(element);
    }
  });

  console.log("====");
  console.log("PACOTES POR PRODUTO");
  console.log("====");

  pacotesPorProduto.forEach((value, key) => {
    console.log("Código do Produto: " + produto.get(key));
    console.log("Pacotes:");
    console.log(value);
  });
}
module.exports = {
  autenticaTodosPacotes,
  validaCaracteres,
  validaTipoProduto,
  validaJoiasCentroOeste,
  validaVendedor,
  listaDestinoPacote,
  listaRegioesChaveValor,
  listaBrinquedosRegiaoSul,
  imprimeListaPacotesValidos,
  imprimePacotesValidosAgrupadosPorRegiao,
  imprimePacotesValidosAgrupadosPorVendedor,
  imprimePacotesValidosAgrupadosPorDestino,
  imprimePacotesValidosAgrupadosPorProduto,
};
