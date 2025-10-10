var e_botao = window.document.getElementById('botao')
e_botao.addEventListener('click', tab)

function tab() {
    var num = window.document.querySelector('input#txtn')
    var n = Number(num.value)

    if (num.value.length == 0) {
        alert('Digite um número para mutiplicar!')
    } else{
        var tabuada = window.document.getElementById('tabuada')

        tabuada.innerHTML = ''

        var c = 1
        while (c <= 10) {
            var line = document.createElement('option')
            line.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(line)
            c++
        }
    }
}