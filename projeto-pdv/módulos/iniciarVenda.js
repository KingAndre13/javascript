export const iniciarVenda = ({
    informarCpf,
    campoCpf,
    btnSimCpf,
    btnNaoCpf,
    btnEntrarCpf,
    inputCpf,
    setCpfCliente
}) => {

    //Cliente Informou o CPF
    btnSimCpf.onclick = () => {
        informarCpf.style.display = 'none'
        campoCpf.style.display = 'block'

        btnEntrarCpf.onclick = () => {
            const valor = Number(inputCpf.value)
            setCpfCliente(valor);
            campoCpf.style.display = 'none'
        }
    }

    //Cliente não informou o CPF
    btnNaoCpf.onclick = () => {
        setCpfCliente('Consumidor não Identificado.')
        informarCpf.style.display = 'none'
    }
}