var e_verificar = window.document.querySelector('input#botao')
e_verificar.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/boy.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/boyteen.jpg')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/man.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/oldman.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/kid.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/teen.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/woman.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/oldwoman.jpg')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        res.appendChild(img)
    }
}