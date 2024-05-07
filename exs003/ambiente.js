function contou() {
    let ini = document.getElementById('nin')
    let fin = document.getElementById('nfi')
    let pas = document.getElementById('nps')
    let tim = document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        tim.innerHTML = 'Impossível contar!'
        window.alert('ERRO: Verifique se todos os campos estão preenchidos a parti do número 1 ou verificar se os passos são maiores do que o início ou fim.')
    } else {
        tim.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                tim.innerHTML += `${c} \u{1F449} `
            }
            
        } else {
           for(let c = i; c >= f; c -= p) {
            tim.innerHTML += `${c} \u{1F449} `
           }
        }
        tim.innerHTML += `\u{1F3C1}`
    }
}
