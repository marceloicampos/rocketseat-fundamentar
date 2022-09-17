// Navegando pelos elementos

const body = document.querySelector('body')

// parentNode parentElement

console.log(body.parentNode)
console.log(body.parentElement)

// childNodes children

console.log(body.childNodes)
console.log(body.children)

// firstChild firstElementsChild

console.log(body.firstChild)
console.log(body.firstElementChild)

// lastChild lastElementChild

console.log(body.lastChild)
console.log(body.lastElementChild)

// -----------

const el = document.querySelector('header')

// nextSibling nextElementSibling

console.log(el.nextSibling)
console.log(el.nextElementSibling)

// previousSibling previousElementSibling

console.log(el.previousSibling)
console.log(el.previousElementSibling)

// Criando e adicionando elementos

// createElement

const div = document.createElement('div')

// div.textContent = 'Novo Elemento'

div.innerText = 'Olá Devs'

// append prepend

body.appendChild(div)

body.prepend(div)

// insertBefore

const script = document.querySelector('script')
body.insertBefore(div, script)
