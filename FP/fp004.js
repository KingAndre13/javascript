let nomes = ["Igor", "Renato", "Maria"]
let nota1 = [3, 6, 4]
let nota2 = [4, 7, 5]

let media = (n1, n2) => {
    return (n1 + n2)/2
}

for (i in nomes, nota1, nota2) {
    if (media(nota1[i], nota2[i]) < 6){
   console.log(`O Aluno(a) ${nomes[i]} com a média ${media(nota1[i], nota2[i])} está reprovado!`)
    } else {
        console.log(`O Aluno(a) ${nomes[i]} com a média ${media(nota1[i], nota2[i])} está aprovado!`)
    }
}

/*let nomes = ["Igor", "Renato", "Maria"];
let nota1 = [3, 6, 4];
let nota2 = [4, 7, 5];

// Função para calcular a média de duas notas

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

// Verifica se os arrays têm o mesmo tamanho

if (nomes.length !== nota1.length || nomes.length !== nota2.length) {
  console.error("Os arrays não têm o mesmo tamanho.");
  return;
}

// Itera sobre os índices dos arrays usando um loop tradicional
for (let i = 0; i < nomes.length; i++) {
  const mediaAluno = calcularMedia(nota1[i], nota2[i]);
  if (mediaAluno < 6) {
    console.log(`O aluno(a) ${nomes[i]} com a média ${mediaAluno} está reprovado!`);
  } else {
    console.log(`O aluno(a) ${nomes[i]} com a média ${mediaAluno} está aprovado!`);
  }
}*/