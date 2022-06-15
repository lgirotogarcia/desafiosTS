// Desafio 1

interface Employee {
    code: number,
    name: string
}

const employee: Employee = {
    code: 10,
    name: 'John'
}



// Desafio 2

enum Profissao {
    Atriz,
    Padeiro,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
},

pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
},

pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
},

pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}



// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal: number = 0

limparSaldo()

function somarAoSaldo(soma: number) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
}

function limparSaldo() {
        campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});



// Desafio 4

