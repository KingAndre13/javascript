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

    if (id === "sxm" && idade < 12) {
        msg.innerHTML = `Você é um menino de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/boy.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxm" && idade < 17) {
        msg.innerHTML = `Você é um menino de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/boyteen.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxm" && idade < 49) {
        msg.innerHTML = `Você é um homem de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/man.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxm" && idade >= 50) {
    msg.innerHTML = `Você é um homem de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/oldman.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxf" && idade < 12) {
        msg.innerHTML = `Você é uma menina de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/kid.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxf" && idade < 17) {
        msg.innerHTML = `Você é uma menina de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/teen.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxf" && idade < 49) {
        msg.innerHTML = `Você é uma mulher de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/woman.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    } else if (id === "sxf" && idade >= 50) {
        msg.innerHTML = `Você é uma mulher de ${idade} anos!`
        msg.style.textAlign = 'center'
        document.querySelector('div#imagem').style.display = 'block'
        document.querySelector('div#imagem').style.background = 'url(./imagens/oldwoman.jpg)'
        document.querySelector('div#imagem').style.backgroundSize = 'cover'
    }
}