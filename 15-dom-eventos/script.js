// Eventos

function print() {
    console.log('print2')
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', () => {
    console.log('print1')
})

h1.onmouseover = () => {
    console.log('print3')
}

const input = document.querySelector('input')

input.onclick = () => {
    console.log('cliquei')
}

input.onkeydown = function (event) {
    console.log(event.key)
    console.log(event.currentTarget.value)
}
