import { iniciarVenda } from './módulos/iniciarVenda.js';
import { Mostarhora } from './módulos/hora.js';
import { resetTela } from './módulos/resetTela.js';
import { entrarMatricula } from './módulos/entrarMatricula.js';


let pessoaOperador = {
    nome:'André Diogo',
    matricula: 367417
}

let cpfCliente = null

Mostarhora({
    horaDisplay: document.querySelector('#hora')
})

let sectionStatus = document.querySelector('#status')

let statusCaixa = window.document.querySelector('h2#cstatus')
statusCaixa.innerHTML = 'Caixa Fechado'

let mainDiv = window.document.querySelector('div.main-box')
let listaCompras = window.document.querySelector('div#lista_compras')
let quantItems = document.querySelector('#quantItems')
let codItems = document.querySelector('#codItems')
let registItems = document.querySelector('#entrarqtdCod')
let fecharNota = document.querySelector('#fecharNota')

let operador = window.document.getElementById('operador')
const {nome} = pessoaOperador;
let matricula = window.document.getElementById('in-matricula')
matricula.focus()
let e_botao = window.document.getElementById('botao_entrar')
e_botao.addEventListener('click', () => {

    const txtNmatricula = Number(matricula.value)

    entrarMatricula({
        operador,
        nome,
        Nmatricula: txtNmatricula
    })

    resetTela({ statusCaixa, matricula, e_botao, mainDiv, listaCompras, quantItems, codItems, registItems, fecharNota })
})

const setCpfCliente = value => cpfCliente = value;
const informarCpf = document.querySelector('#informeCpf')
const campoCpf = document.querySelector('#campoCpf')
const btnSimCpf = document.querySelector('#s_cpf')
const btnNaoCpf = document.querySelector('#n_cpf')
const btnEntrarCpf = document.querySelector('#entrar_cpf')
const inputCpf = document.querySelector('#cpf')
const codigoItems = document.querySelector('#txtcod')
const quantNum = document.querySelector('#txtItems')

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
    listaCompras,
    quantNum,
    statusCaixa
});
