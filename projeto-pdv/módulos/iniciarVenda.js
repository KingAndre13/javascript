import { produtos } from './codigos.js'
export const iniciarVenda = ({
    informarCpf,
    campoCpf,
    btnSimCpf,
    btnNaoCpf,
    btnEntrarCpf,
    inputCpf,
    setCpfCliente,
    registItems,
    codigoItems,
    listaCompras,
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
    let c = 1
    registItems.onclick = () => {
        const codigo = Number(codigoItems.value.trim())
        const produto = produtos.find(Produto => Produto.codigo === codigo)
        listaCompras.style.display = 'block'
            if (produto) {
                const item = document.createElement('p')
                item.innerHTML = `<strong> <${c}> ${produto.nomeProduto} - R$${produto.precoProduto.toFixed(2)}</strong>`
                listaCompras.style.alignItems = 'flex-start'
                listaCompras.style.justifyContent = 'flex-start'
                listaCompras.appendChild(item)
            } else {
                alert(`Produto não Cadastrado!`)
            }
        c++
    }
        

    
}