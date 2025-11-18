const numeros = [10, 20, 30];

const [a, b] = numeros;

console.log(a, b);

const pessoa = {nome:'André', idade:20};

const {nome, idade} = pessoa;

console.log(`Nome:${nome} Idade:${idade}`);

const numero = [1, 2, 3];
const maisnumero = [...numero, 4, 5];
console.log(maisnumero)

const pessoas = {nome: 'André', idade: 20};
const novaPessoa = {...pessoas, cidade:'Recife'};
console.log(novaPessoa);

function soma  (...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}

console.log(soma(1, 2, 3, 4));

const [x, y,...resto] = [1, 2, 3, 4, 5];
console.log(x);
console.log(y);
console.log(resto); 