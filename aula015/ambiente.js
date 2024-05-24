let num = [4, 5, 6, 7, 8]

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
/*for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
let pos = num.indexOf(9)
if (pos === -1){
    console.log(`OPS! parece que esse valor não foi encontrado.`)
} else {
    console.log(`o valor 4 está na posição ${pos}`)
}