function exibir(num) {
    console.log(`A operação resultou em: ${num}`)
}


function soma (a, b, callback) {
    let op = a + b
    callback(op)
}

function mutliplicacao(a, b, cb) {
    let op = a * b
    cb(op)
}

soma(2, 2, exibir)


mutliplicacao(2, 4, exibir)