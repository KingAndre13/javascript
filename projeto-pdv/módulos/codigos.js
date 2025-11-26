 class Produto {
    constructor (valor1, valor2, valor3) {
        this.codigo = valor1
        this.nomeProduto = valor2
        this.precoProduto = valor3
    }

    
}
export const produtos = [
    new Produto(7894621000003, 'Feijão Carioca Santo Agostinho - 1kg', 5.99),
    new Produto(7894621000006, 'Feijão Fraldinho Santo Agostinho - 1kg', 6.79),
    new Produto(7892630000123, 'Feijão Carioca Realeza - 1kg', 5.59),
    new Produto (7892621123697, 'Arroz Branco Paris - 1kg', 4.69),
    new Produto (7892621569421, 'Arroz Parbolizado Paris - 1kg', 4.19)
]