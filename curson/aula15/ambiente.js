let num = [7, 14, 28, 39]
num.sort((a, b) => a - b);
/*
console.log(num)
while (c < num.length) {
console.log(`A posição ${c} tem o valor ${num[c]}`)
    c++
}*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

