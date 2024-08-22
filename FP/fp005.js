/*let alunos = { nome: "Wemerson", cargo: "Líder de Setor", matricula: 98000486}

console.log(alunos["matricula"])*/

let funcionariosDoVillage = [
    { nome: "André", matricula: 367417},
    { nome: "Carla", matricula: 355464},
    { nome: "Juan", matricula: 393538},
    { nome: "Isaac", matricula: 429765},
    { nome: "Tiego", matricula: 439643},
    { nome: "Wemerson", matricula: 98000486}
                           
]

function irParaCasa() {
    console.log ("Carro 1:")

    let f = 0;
    while (f < 4) {
        console.log(`${funcionariosDoVillage[f].nome} - ${funcionariosDoVillage[f].matricula}`)
        f++
    }
    console.log("Carro 2:")

    let r = 4
    while (r < 6) {
        console.log(`${funcionariosDoVillage[r].nome} - ${funcionariosDoVillage[r].matricula}`)
        r++
    }
    /*for (let f of funcionariosDoVillage) {
        console.log(`${f.nome} - ${f.matricula}`)
    }*/

}

irParaCasa()