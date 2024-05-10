let cli = document.body.querySelector('input#botao')
cli.addEventListener('click', clicou)

function clicou(){   
    let mul = document.body.querySelector('input#txtm')
    let s = document.body.querySelector('select#seltab')

    if (mul.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    } else {
    let m = Number(mul.value)
    s.innerHTML = ''
    for(let mp = 1; mp <= 10; mp++) {
        let item = document.createElement('option')
        item.text = `${m} x ${mp} = ${m*mp}`
        s.appendChild(item)
    }
  }
}