let button1 = document.body.querySelector('input#add')
let button2 = document.body.querySelector('input#fim')
button1.addEventListener('click', adicionar)
button2.addEventListener('click', finalizar)
let n = []



function adicionar() {
    let number = document.body.querySelector('input#txtn')
    let num = Number(number.value)
    let s = document.body.querySelector('select#numberadd')
    if(num <= 0 || num > 100 || n.indexOf(num) != -1) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        n.push(num)
        s.innerHTML = ''
        for(let pos = 0; pos < n.length; pos++) {
        let item = document.createElement('option')
        item.text = `o valor ${n[pos]} foi adicionado.`
        s.appendChild(item)
        }
        }
    }

function finalizar() {
    n.sort()
    let soma = 0
    for(let sm = 0; sm < n.length; sm++) {
        soma += n[sm]
    }
    let div = soma / n.length
    let res = document.body.querySelector('div#res')
    res.innerHTML = `<p>Ao todo, temos ${n.length} números cadastrados.</p>
    <p>O maior valor informado foi ${n[n.length-1]}
    <p>O menor valor informado foi ${n[0]}
    <p>Somando todos os valores, temos ${soma}.
    <p>A média dos valores digitados é ${div}.`
}


