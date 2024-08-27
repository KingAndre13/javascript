let button = document.querySelector("input#butt")
// Aqui vão ficar armazenados os nomes colocados em cada um dos 7 carros!
let n1 = []
let n2 = []
let n3 = []
let n4 = []
let n5 = []
let n6 = []
let n7 = []


button.addEventListener("click", adicionar)

function adicionar() {
    let name = document.querySelector("input#ntxt")
    let destino = document.querySelector("select#dtxt")
    
    
    
    if (name.value.length == 0 || destino.options[0].selected) {
        window.alert("Valor inválido. Tente novamente!")
    } else if (destino.options[1].selected) {
            n1.push(name.value)

            let tc1 = document.querySelector(`td#car1p${n1.length}`)
            tc1.innerHTML = `${n1[n1.length-1]}`

    } else if (destino.options[2].selected) {
        n2.push(name.value)

        let tc2 = document.querySelector(`td#car2p${n2.length}`)
        tc2.innerHTML = `${n2[n2.length-1]}`

    } else if (destino.options[3].selected) {
        n3.push(name.value)

        let tc3 = document.querySelector(`td#car3p${n3.length}`)
        tc3.innerHTML = `${n3[n3.length-1]}`

    } else if (destino.options[4].selected) {
        n4.push(name.value)

        let tc4 = document.querySelector(`td#car4p${n4.length}`)
        tc4.innerHTML = `${n4[n4.length-1]}`

    } else if (destino.options[5].selected) {
        n5.push(name.value)

        let tc5 = document.querySelector(`td#car5p${n5.length}`)
        tc5.innerHTML = `${n5[n5.length-1]}`

    } else if (destino.options[6].selected) {
        n6.push(name.value)

        let tc6 = document.querySelector(`td#car6p${n6.length}`)
        tc6.innerHTML = `${n6[n6.length-1]}`

    } else if (destino.options[7].selected) {
        n7.push(name.value)

        let tc7 = document.querySelector(`td#car7p${n7.length}`)
        tc7.innerHTML = `${n7[n7.length-1]}`
    }
}      