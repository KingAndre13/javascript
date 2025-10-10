/*var e_adicionar = window.document.getElementById('botao1')
var e_finalizar = window.document.querySelector('input#botao2')

e_adicionar.addEventListener('click', adicionar)
e_finalizar.addEventListener('click', finalizar)

var memoria = []
var soma = 0

var resultado = window.document.querySelector('div#res')

function adicionar() {
    var num = window.document.querySelector('input#txtn')
    var n = Number(num.value)
    var res = window.document.querySelector('select#resultado')
    

    if (num.value.length == 0 || memoria.indexOf(n) != -1 || n > 100 || n == 0) {
        alert('Valor inválido ou já encontrado na lista!')
    } else {
        memoria.push(n)
        var line = window.document.createElement('option')
        line.text = `Valor ${n} adicionado.`
        res.appendChild(line)
        soma += n
    }

    resultado.innerHTML = ''
}



function finalizar() {
    if (memoria.length == 0) {
        alert('Adicione valores antes de iniciar!')
    } else {
        memoria.sort((a, b) => a - b)
    
        resultado.innerHTML = ''

    

        resultado.innerHTML += `<p>Ao todo, temos ${memoria.length} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior número informado foi ${memoria[memoria.length-1]}.</p>`
        resultado.innerHTML += `<p>O menor número informado foi ${memoria[0]}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${soma / memoria.length}.</p>`
    }
}
*/

var e_adicionar = window.document.getElementById('b1')
var e_finalizar = window.document.getElementById('b2')
e_adicionar.addEventListener('click', adicionar)
e_finalizar.addEventListener('click', finalizar)

let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}