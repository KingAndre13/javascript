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
    quantNum,
    statusCaixa
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
    let subTotal = 0
    registItems.onclick = () => {
        const codigo = Number(codigoItems.value.trim())
        const produto = produtos.find(Produto => Produto.codigo === codigo)
        listaCompras.style.display = 'block'

        if (quantNum.value == 0) {
            alert('Informe a quantidade!')
        } else {

            if (produto) {
                const item = document.createElement('p')
                item.innerHTML = `<strong> <${c}> ${Number(quantNum.value)}UND - ${produto.nomeProduto} - ${produto.precoProduto.toFixed(2)} - R$${(produto.precoProduto * Number(quantNum.value)).toFixed(2)}</strong>`
                listaCompras.style.alignItems = 'flex-start'
                listaCompras.style.justifyContent = 'flex-start'
                listaCompras.appendChild(item)
                listaCompras.scrollTop = listaCompras.scrollHeight
                subTotal = subTotal + Number((produto.precoProduto * Number(quantNum.value)))
            } else {
                alert('Produto não cadastardo!')
            }
            c++
        }

        statusCaixa.textContent = `TOTAL: R$${subTotal.toFixed(2)}`
        
    }



}