const ENTRADA = "abcdefg";

const  stringInvertida = inverterString(ENTRADA);
//resultado
console.log(stringInvertida)

///////////////////////
//      FUNCAO       //
///////////////////////
function inverterString(string) {
  if (!string) {
    return "";
  }
  let novaString = "";
  for (let indice = string.length; 0 <= indice; indice--) {
    novaString = novaString + string.charAt(indice);
  }
  return novaString;
}
