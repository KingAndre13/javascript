function mane(n1=0, n2=0, n3=0) {
    if(n1 > n2 && n2 > n3) {
        return console.log(`${n1} maior, ${n2} médio, ${n3} menor`)
    } else if(n2 > n1 && n1 > n3) {
        return console.log(`${n2} maior, ${n1} médio, ${n3} menor`)
    } else if (n3 > n2 && n2 > n1) {
        return console.log(`${n3} maior, ${n2} médio, ${n1} menor`)
    }
}

console.log(mane(5, 3, 8))