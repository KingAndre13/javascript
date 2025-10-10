let numPDV = [1, 2, 3, 4, 5]
let operadores = ['André Diogo', 'Carla Christine', 'Juan Felipe', 'Savio Henrique']


let numCaixa = window.document.querySelector('p#numCaixa')
numCaixa.innerHTML = `Caixa ${numPDV[4]}`

let operador = window.document.getElementById('operador')
operador.innerHTML = `Operador: ${operadores[1]}`

const hora = () => {
    const agora = new Date()
    const dia = agora.getDate().toString().padStart(2, '0')
    const mes = agora.getMonth().toString().padStart(2, '0')
    const ano = agora.getFullYear().toString().padStart(2, '0')
    const horas = agora.getHours().toString().padStart(2, '0')
    const minutos = agora.getMinutes().toString().padStart(2, '0')
    const segundos = agora.getSeconds().toString().padStart(2, '0')

    window.document.querySelector('p#hora').textContent = `${dia}/${Number(mes) + 1}/${ano} ${horas}:${minutos}:${segundos}`
}

hora()
setInterval(hora, 1000)


let statusCaixa = window.document.querySelector('h2#cstatus')
statusCaixa.innerHTML = 'Caixa Aberto'

