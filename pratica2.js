//desafio 01
let digiteSemana = prompt('digite um dia da semana');
if(digiteSemana.toLowerCase() === 'sabado' || digiteSemana.toLowerCase() === 'domingo') {
    console.log('bom final de semana');
} else {
    console.log('boa semana');
}

//desafio 02
let numero = prompt('digite um numero:')
if(numero > 0){
    alert('o numero digitado é positivo')
} else if(numero < 0) {
    alert('o numero digitado é negativo')
} else {
    alert('numero digitado é 0')
}

//desafio 03
let pontuacao = prompt('digite a sua pontuaçao no jogo,  de 0 a 200')
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!')
} else {
    alert('Tente novamente para ganhar. 😭')
}

//desafio 4
let saldo = prompt('qual o valor que vc supoe ter na conta Satãder?')
alert(`o que vc tem de verdade na conta é bem menos que ${saldo} 👍`)

//desafio 5
let nome = prompt('como vc gostaria de ser chamado?')
alert(`seja bem vindo(a) - ${nome} 💕`)