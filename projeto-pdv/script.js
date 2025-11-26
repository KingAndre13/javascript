import { resetTela } from './módulos/resetTela.js';
import { iniciarVenda } from './módulos/iniciarVenda.js';
import { Mostarhora } from './módulos/hora.js';

let numPDV = [1, 2, 3, 4, 5]
let numCaixa = window.document.querySelector('p#numCaixa')
numCaixa.innerHTML = `Caixa ${numPDV[2]}`

var pessoaOperador = {
    nome:'André Diogo',
    matricula: 367417
}

let cpfCliente = null

Mostarhora({
    horaDisplay: document.querySelector('#hora')
})


let statusCaixa = window.document.querySelector('h2#cstatus')
statusCaixa.innerHTML = 'Caixa Fechado'

let matricula = window.document.getElementById('in-matricula')
matricula.focus()

let e_botao = window.document.getElementById('botao_entrar')

e_botao.addEventListener('click', entrar_matricula)

let mainDiv = window.document.querySelector('div.main-box')
let listaCompras = window.document.querySelector('div#lista_compras')
let quantItems = document.querySelector('#quantItems')
let codItems = document.querySelector('#codItems')
let registItems = document.querySelector('#entrarqtdCod')




function entrar_matricula() {
    if (Number(matricula.value) === 367417) {
        let operador = window.document.getElementById('operador')
        const {nome} = pessoaOperador;
        operador.innerHTML = `Operador: ${nome}`
        resetTela({ statusCaixa, matricula, e_botao, mainDiv, listaCompras, quantItems, codItems, registItems });
    } else {
        alert('Operador não cadastrado!')
    }
}


const setCpfCliente = value => cpfCliente = value;
const informarCpf = document.querySelector('#informeCpf')
const campoCpf = document.querySelector('#campoCpf')
const btnSimCpf = document.querySelector('#s_cpf')
const btnNaoCpf = document.querySelector('#n_cpf')
const btnEntrarCpf = document.querySelector('#entrar_cpf')
const inputCpf = document.querySelector('#cpf')
const codigoItems = document.querySelector('#txtcod')

iniciarVenda({
    informarCpf,
    campoCpf,
    btnSimCpf,
    btnNaoCpf,
    btnEntrarCpf,
    inputCpf,
    setCpfCliente,
    registItems,
    codigoItems,
    listaCompras
});

