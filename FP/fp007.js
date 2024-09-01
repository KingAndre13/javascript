/*function criarAluno(nome, n1, n2) {
    
     return {
         nome: nome,
         nota1: n1,
         nota2: n2,
         media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}*/
function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }
}





/*let turmas = [
        criarAluno("André", 10, 3),
        criarAluno("João", 7, 4),
        criarAluno("Marcela", 8.5, 2.25),
        criarAluno("Pedro", 7, 2)
]*/

let a = new aluno("Igor", 8, 7)
let b = new aluno("André", 5, 9)

console.log(`${a.nome} - ${a.media()}`)

/*for (let aluno of turmas) {
    console.log(`${aluno.nome} - ${aluno.media()}`)
}*/