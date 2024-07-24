/*const saudacao = (nome) => alert(`Olá ${nome}`);

const processaEntradaUsuario = (cb) => {
    const nome = prompt('Digite seu nome: ');
    cb(nome)
}

processaEntradaUsuario(saudacao);

const callback = e => alert(`Aconetceu um evento ${e.type}`)

window.addEventListener('click', callback)
const somar = (x, y) => x + y;


const calcular = (x, y, computar) => computar(x, y)

const resultado = calcular(20, 300, somar)

console.log (resultado)*/

const callback = c => alert(`Aconetceu um evento ${c.type}`)

window.addEventListener('click', callback)