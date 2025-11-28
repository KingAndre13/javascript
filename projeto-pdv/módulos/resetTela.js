export const resetTela = ({
    statusCaixa,
    matricula,
    e_botao,
    mainDiv,
    listaCompras,
    quantItems,
    codItems,
    registItems,
    fecharNota
}) => {
    statusCaixa.innerHTML = 'Caixa Aberto';
    matricula.style.display = 'none';
    e_botao.style.display = 'none';
    mainDiv.style.margin = '0px';
    listaCompras.style.display = 'flex'
    quantItems.style.display = 'inline-block'
    codItems.style.display = 'inline-block'
    registItems.style.display = 'inline-block'
    fecharNota.style.display = 'inline-block'
};