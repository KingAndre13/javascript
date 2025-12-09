let s1 = document.querySelector('#s1')
let s2 = document.querySelector('#s2')

function obiWan (callback) {
    s1.innerText = `Hello There!`
    setTimeout (() => {
        callback()
    }, 3000)
}

function greivous () {
    s2.innerText = `General Kenobi!`
}

obiWan(greivous)