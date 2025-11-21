export const resetTela = ({
    statusCaixa,
    matricula,
    e_botao,
    mainDiv,
    listaCompras
}) => {
    statusCaixa.innerHTML = 'Caixa Aberto';
    matricula.style.display = 'none';
    e_botao.style.display = 'none';
    mainDiv.style.margin = '0px';
    listaCompras.style.display = 'flex'
};