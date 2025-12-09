var a = window.document.querySelector('h2')
a.addEventListener('click', largada)
a.addEventListener('mouseenter', luzesoff)
a.addEventListener('mouseout', voltar)

function luzesoff() {
    a.style.color = 'yellow'
    a.innerText = 'Quando elas se apagarem vai começar o Grande Premio da Itália..'
}
                    
function largada() {
    a.style.color = 'green'
    a.innerText = 'E É DISSO QUE O POVO GOSTA... LARGA MUITO BEM LECLERC, LARGA TAMBÉM LEWIS HAMILTON!!!'
}

function voltar() {
    a.style.color = 'red'
    a.innerText = 'Luzes vermelhas vão se acendendo...'
}

