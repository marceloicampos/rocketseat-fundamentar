console.log('---início do código---')

let number = 2
console.log(number + 1)
// operador binário

console.log(++number)
// operador unário

console.log(typeof number)
// operador unário

console.log(true ? 'oi' : 'tchau')
console.log(false ? 'oi' : 'tchau')
let age = 16
const youCanDrive = age >= 18 ? 'Can Drive' : "Can't Drive"
console.log(youCanDrive)
// operador ternário
// Condição então valor 1 se não valor 2
// Condition ? value1 : value2

let nome = new String('Marcelo')
nome.sobrenome = 'campos'
let idade = new Number(43)
console.log(nome, nome.sobrenome, idade)
let date = new Date()
console.log(date.__proto__)
// left hand side expression
// o item da "esquerda" da expressão é "transformando" num objeto

console.log('---fim do código---')
// função auto executável é um dos poucos
// em que o ; é obrigatório
;(() => {
    console.log('marcelo')
})()
