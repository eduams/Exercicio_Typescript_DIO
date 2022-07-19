export {}
//Exercício 1
let employee = {
    code: 10,
    name: 'Jon'
};

//Exercício 2
let pessoa1: {nome: string, idade: number, profissao: string} = {
nome: "maria",
idade: 29,
profissao: "atriz"
};

let pessoa2: {nome: string, idade: number, profissao: string} = {
nome: "roberto",
idade: 19,
profissao: "Padeiro"
};

let pessoa3: {nome: string, idade: number, profissao: string} = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: {nome: string, idade: number, profissao: string} = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}

 //Exercício 3
 let botaoAtualizar = document.getElementById('atualizar-saldo');
 let botaoLimpar = document.getElementById('limpar-saldo')!;
 let soma = document.getElementById('soma')! as HTMLInputElement;
 let campoSaldo = document.getElementById('campo-saldo');
 
 let totalSaldo = 0;
 wipeSaldo();

 function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        totalSaldo += soma
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
botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
    wipeSaldo();
});