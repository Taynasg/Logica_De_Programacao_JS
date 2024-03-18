alert("Boas-vindas ao jogo do número secreto");
// Math.random() retorna um número aleatório  entre 0 (inclusivo) e 1 (exclusivo), 
//multiplicando por 100 para termos um número  maior 0 (inclusivo) e menor que 100 (exclusivo)
// e somando 1 para termos um número entre 1 e 100 (Ambos inclusivos)
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 1;

// Enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
  // atualiza o valor de chute
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  //Se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`);
