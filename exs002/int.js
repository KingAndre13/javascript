var botao = document.querySelector('input#botao')

botao.addEventListener('click', clicou)

function clicou() {
    var agora = new Date()
    var ano = Number(agora.getFullYear())
    var anonas = Number(document.querySelector('input#nxt').value)
    var idade = ano - anonas
    var rchecked = document.querySelector('input[type="radio"]:checked')
    var id = rchecked.id
    var msg = document.querySelector('p#msg')

    if (id ==="sxm") {
        msg.innerHTML = `Você é um homem de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'blue'
    } else if (id === 'sxf') {
        msg.innerHTML = `Você é uma mulher de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'pink'
    }
}