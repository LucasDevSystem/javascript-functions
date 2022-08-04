const ENTRADA = 13;

const pertenceAFibonacci = eUmValorDeFibonacci(ENTRADA);
const resposta = pertenceAFibonacci
  ? "este valor pertence a fibonacci"
  : "este valor nao pertence a fibonacci";

console.log(resposta);

///////////////////////
//      FUNCAO       //
///////////////////////

function eUmValorDeFibonacci(valorRecebido = 0) {
  let valorAtual = 0;
  let sequenciaDeValores = [0, 1];
  let pertenceASequencia = false;

  while (valorAtual < valorRecebido) {
    const penultimoValor = sequenciaDeValores[sequenciaDeValores.length - 2];
    valorAtual = penultimoValor + valorAtual;

    if (valorAtual === valorRecebido) {
      pertenceASequencia = true;
      break;
    }
    sequenciaDeValores.push(valorAtual);
  }

  return pertenceASequencia;
}
