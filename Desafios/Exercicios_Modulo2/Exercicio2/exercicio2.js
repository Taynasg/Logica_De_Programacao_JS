// Verifique se um número digitado pelo usuário é positivo 
//ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt("Digite um número");
if (numeroDigitado < 0) {
  alert("O número é negativo");
} else{
    if (numeroDigitado == 0) {
        alert("O número é zero");
    } else
    alert("O número é positivo");
}