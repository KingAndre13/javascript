export const entrarMatricula = ({
    operador,
    nome,
    Nmatricula
}) => {
    if(Nmatricula === 367417) {
        operador.innerHTML = `Operador: ${nome}` 
    } else {
        alert('Operador não cadastrado')
    }
}