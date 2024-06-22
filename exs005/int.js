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
        res.innerHTML = ''
        }
        }
        number.value = ''
        number.focus()
    }

function finalizar() {
    if(n.length == 0) {
       window.alert('Adicione valores antes de finalizar!') 
    } else {
    let soma = 0
    let maior = n[0]
    let menor = n[0]
    for(let sm in n) {
        soma += n[sm]
        if (n[sm] > maior) {
            maior = n[sm]
        }
        if (n[sm] < menor) {
            menor = n[sm]
        }
    }
    let div = soma / n.length
    let res = document.body.querySelector('div#res')
    res.innerHTML = `<p>Ao todo, temos ${n.length} números cadastrados.</p>
    <p>O maior valor informado foi ${maior}
    <p>O menor valor informado foi ${menor}
    <p>Somando todos os valores, temos ${soma}.
    <p>A média dos valores digitados é ${div}.`
    }
    
}


