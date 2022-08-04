const dados = require("./dados-questao-3.json");

const faturamentosExtraido = extraiApenasDiasUteis(dados);

const menorFat = obterMenorFaturamento(faturamentosExtraido);
const maiorFat = obterMaiorFaturamento(faturamentosExtraido);
const maiorQueMedia = numerosDediasMaiorQueMedia(faturamentosExtraido);

//resultados

console.log(
  "O menor faturamento foi: " + menorFat.valor + " no dia: " + menorFat.dia
);
console.log(
  "O maior faturamento foi: " + maiorFat.valor + " no dia: " + maiorFat.dia
);
console.log(
  "O numero de dias que os faturamentos foram maior que a media sao: " +
    maiorQueMedia
);
///////////////////////
//        FUNCOES    //
///////////////////////
function obterMenorFaturamento(faturamentos) {
  let menorFaturamento = faturamentos[0];

  for (const faturamento of dados) {
    const valorAtual = faturamento.valor;
    const menorValor = menorFaturamento.valor;

    if (menorValor > valorAtual && valorAtual !== 0) {
      menorFaturamento = faturamento;
    }
  }

  return menorFaturamento;
}

function obterMaiorFaturamento(faturamentos) {
  let maiorFaturamento = faturamentos[0];

  for (const faturamento of faturamentos) {
    const valorAtual = faturamento.valor;
    const maiorValor = maiorFaturamento.valor;

    if (valorAtual > maiorValor) {
      maiorFaturamento = faturamento;
    }
  }

  return maiorFaturamento;
}

function numerosDediasMaiorQueMedia(faturamentos) {
  const media = mediaFaturamentos(faturamentos);
  let dias = 0;

  for (const faturamento of faturamentos) {
    const { valor } = faturamento;
    if (valor > media) {
      dias++;
    }
  }

  return dias;
}

function mediaFaturamentos(faturamentos) {
  let media = 0;
  let numeroDeValores = faturamentos.length;
  //faz a soma de todos valores.
  for (const { valor } of dados) {
    media = media + valor;
  }

  media = media / numeroDeValores;

  return media;
}
function extraiApenasDiasUteis(dados) {
  let valoresExtraidos = [];

  for (const faturamento of dados) {
    if (faturamento.valor !== 0) {
      valoresExtraidos.push(faturamento);
    }
  }

  return valoresExtraidos;
}
