// Função Tradicional
function soma (a, b) {
    return a + b;
}
//Arrow Function (Tradicional)
const soma = (a, b) => {
    return a + b
}

//Arrow Function (Simnplificada)
const soma =  (a, b) => a + b


//Função Sem Parâmetros
function digaOi  () {
    return 'Oi!'
}

//Arrow Function Sem Parâmetros
const digaOi = () => 'Oi!'

//Função Tradicional Com 1 Parâmetro
function quadrado(n) {
    return n * n
}

// Arrow Function Com 1 Parâmetro
const quadrado = n => n * n

//Nenhum parâmetro: Parêteses vazios () são obrigatórios
const digaOi = () => 'Oi!'

//Um parâmetro: Parênteses são opicionais.
const quadrado = n => n * n

//Mais de um parâmetro: Parênteses são obrigatórios.
const soma =  (a, b) => a + b
