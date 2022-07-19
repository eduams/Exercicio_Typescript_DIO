"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 1
let employee = {
    code: 10,
    name: 'Jon'
};
//Exercício 2
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//Exercício 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let totalSaldo = 0;
wipeSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        totalSaldo += soma;
        campoSaldo.innerHTML = totalSaldo.toString();
        wipecampoSaldo();
    }
}
function wipecampoSaldo() {
    soma.value = "";
}
function wipeSaldo() {
    if (campoSaldo) {
        totalSaldo = 0;
        campoSaldo.innerHTML = totalSaldo.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    wipeSaldo();
});
