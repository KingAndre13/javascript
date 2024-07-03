let peso = document.querySelector('input#txnp')
let altu = document.querySelector('input#txna')
let button = document.querySelector('input#bot')
let ter = document.querySelector('section#res')



const calcular = () => {
    let pes = Number(peso.value)
    let alt = Number(altu.value)
    let res = pes / (alt * alt)
    return ter.innerHTML = (`<p>Seu IMC é de ${res}</p>`)
}

button.addEventListener('click', calcular)

