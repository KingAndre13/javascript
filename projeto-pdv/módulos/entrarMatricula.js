export const entrarMatricula = ({
    operador,
    nome,
    Nmatricula
}) => {
    if(Nmatricula === 367417) {
        operador.innerHTML = `Operador: ${nome}` 
        return true
    } else {
        alert('Operador não cadastrado')
        return false
    }
}