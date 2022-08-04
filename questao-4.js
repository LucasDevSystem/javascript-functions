const faturamentos = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

const somaDosFaturamentos = somarFaturamentos(faturamentos);
const porcentagem = obterPorcentagem(faturamentos, somaDosFaturamentos);

///resultado
console.log(porcentagem);

///////////////////////
//      FUNCOES      //
///////////////////////
function obterPorcentagem(dados, soma) {
  let porcentagemPorEstados = [];

  for (const { estado, valor } of dados) {
    const porcentagem = (valor / soma) * 100 + "%";

    porcentagemPorEstados = {...porcentagemPorEstados,...{[estado]: porcentagem }};
  }

  return porcentagemPorEstados;
}
function somarFaturamentos(dados) {
  let total = 0;

  for (const faturamento of dados) {
    const valor = faturamento.valor;
    total = total + valor;
  }

  return total;
}
