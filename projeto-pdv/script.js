let numPDV = [1, 2, 3, 4, 5]
var pessoaOperador = {
    nome:'André Diogo',
    matricula: 367417
}

let cpfCliente = null

let numCaixa = window.document.querySelector('p#numCaixa')
numCaixa.innerHTML = `Caixa ${numPDV[2]}`



const hora = () => {
    const agora = new Date()
    const dia = agora.getDate().toString().padStart(2, '0')
    const mes = agora.getMonth().toString().padStart(1, '0')
    const ano = agora.getFullYear().toString()
    const horas = agora.getHours().toString().padStart(2, '0')
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const segundos = agora.getSeconds().toString().padStart(2, '0')

    window.document.querySelector('p#hora').textContent = `${dia}/${Number(mes) + 1}/${ano} ${horas}:${minutos}:${segundos}`
}

hora()
setInterval(hora, 1000)


let statusCaixa = window.document.querySelector('h2#cstatus')
statusCaixa.innerHTML = 'Caixa Fechado'

let matricula = window.document.getElementById('in-matricula')
matricula.focus()

let e_botao = window.document.getElementById('botao_entrar')

e_botao.addEventListener('click', entrar_matricula)

let mainDiv = window.document.querySelector('div.main-box')
let listaCompras = window.document.querySelector('div#lista_compras')


function entrar_matricula() {
    if (Number(matricula.value) === 367417) {
        let operador = window.document.getElementById('operador')
        const {nome} = pessoaOperador;
        operador.innerHTML = `Operador: ${nome}`
        resetTela()
    } else {
        alert('Operador não cadastrado!')
    }
}


const resetTela = () => {
    statusCaixa.innerHTML = 'Caixa Aberto'
    matricula.style.display = 'none'
    e_botao.style.display = 'none'
    mainDiv.style.margin = '0px'
    listaCompras.style.display = 'flex'
}

const iniciarVenda = () => {

    let informarCpf = window.document.querySelector('div#informeCpf')
    let campoCpf = document.querySelector('div#campoCpf')

    document.getElementById('s_cpf').onclick = function () {
        informarCpf.style.display = 'none'
        campoCpf.style.display = 'block'
        let botao = window.document.getElementById('entrar_cpf')
        botao.onclick = function () {
            cpfCliente = Number(window.document.querySelector('input#cpf').value)
            campoCpf.style.display = 'none'
        }
    }
    
    document.getElementById('n_cpf').onclick = function () {
        cpfCliente = 'Consumidor não Identificado.'
        informarCpf.style.display = 'none'
    }
    
    let fecharNota = 0

    /*do {
        
    } while (fecharNota == 0)
    */
}

iniciarVenda()

