let filfav = ['meu malvado favorito 1', 'vingadores ultimato', 'intocáveis', 'carros 3']
filfav[3] = 'carros 1'
for (let fil = 0; fil < filfav.length; fil++) {
    console.log(filfav[fil])
}
let filfavfrd = ['vingadores a era de ultron', 'capitão america guerra civil', 'titanic']
console.log(`O meu primeiro filme favorito que assisti foi Carros 1 que está na posição ${filfav.indexOf('carros 1')}`)
for (let filfrd = 0; filfrd < filfavfrd.length; filfrd++) {
    console.log(filfavfrd[filfrd])
}

let juntos = filfav.concat(filfavfrd)
console.log(juntos)