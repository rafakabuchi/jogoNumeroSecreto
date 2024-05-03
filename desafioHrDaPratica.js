alert('Boas vindas ao nosso site!');
/*
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = ('Erro! Preencha todos os campos');
alert = (mensagemDeErro); */

let nomeDigitiado = prompt('Nome de usuario:');
let idadeDigitada = prompt('Digite a sua idade:');

if(idadeDigitada >= 18) {
    alert(nomeDigitiado + ' , pode tirar a habilitação')
} else {
    alert('vá com calma criança!')
}