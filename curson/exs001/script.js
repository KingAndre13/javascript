 var e_carregar = window.document.querySelector('body')
 e_carregar.addEventListener('load', carregar())

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`


    if (hora < 12) {
        // BOM DIA!
        img.src = './imagens/dia.jpg'
        e_carregar.style.backgroundColor = '#e2cd9f'
    } else if (hora < 18) {
        // BOA TARDE!
        img.src = './imagens/tarde.jpg'
        e_carregar.style.backgroundColor = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = './imagens/noite.jpg'
        e_carregar.style.backgroundColor = '#515154'
    }
}