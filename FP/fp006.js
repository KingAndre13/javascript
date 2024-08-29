function v() {
    return (this.notas[0] + this.notas[1])/2
}





let aluno = {nome:"Igor", 
             notas:[9, 10],

             media: v
}
            


let aluno1 = {nome:"Mario", 
              notas:[7.5, 8.75],

              media: v
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())
