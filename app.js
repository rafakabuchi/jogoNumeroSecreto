alert('bem vindo ao jogo do numero secreto');

let numeroMaximo  = 300;
let numeroSecreto = parseInt(Math.random()*  numeroMaximo + 1);
console.log(numeroSecreto);

let numeroDigitado;

let tentativas = 1;

while(numeroDigitado != numeroSecreto){
    numeroDigitado = prompt(`Digite um numero entre 1 e ${numeroMaximo}`);

    if (numeroDigitado == numeroSecreto) {
       break;
    } else {
       if( numeroDigitado > numeroSecreto){
        alert('o numero secreto é menor')
       } else {
       alert('numero secreto é maior');
       }
       tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa'
alert(`isso aí, vc descobriu o numero secreto ${numeroSecreto}  com ${tentativas} ${palavraTentativas}`)
// if (tentativas > 1){
//     alert(`isso vc acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas!`)
// }else{
//     alert(`isso vc acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa!`)
//}

