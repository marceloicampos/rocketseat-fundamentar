console.log('---início do código---')

// Prototype on JavaScript

console.log('marcelo'.__proto__)
console.log('marcelo'.length)
console.log(['a', 'b'].length)
// só consegue ver no navegador

// Type Conversion (Type Casting) vs Type Coercion
console.log('9' + 5) // Coercion
console.log(Number('9') + 5) // Conversion

// Manipulando Strings and Numbers
let string = '123'
console.log(Number(string))
let number = '321'
console.log(String(number))

// length
let word = 'mundo'
console.log(word.length)
let numero = 12345
console.log(String(numero).length)

// trocar ponto por vírgula em Number
let num = 545684545.54545454545
console.log(num.toFixed(2).replace('.', ','))

// trocar UPPERCASE para lowercase
let newWord = 'OLÁ MUNDO'
console.log(newWord.toLowerCase())
let newVarChar = 'oi'
console.log(newVarChar.toUpperCase())

// método includes para procurar strings
let frase = 'Oi meu amor, como você está ?'
console.log(frase.includes('amor'))

// split = separe o array por ... excluindo o separador
// join = junte o array com ... incluindo o o separador
let texto = 'Eu quero viver esse amor!'
let myArray = texto.split(' ')
console.log(myArray)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLowerCase())

// Criar Array com Construtor, contar elementos e acessar elementos
let ourArray = ['a', 'b', 'c']
console.log(ourArray)
console.log(ourArray.length)
console.log(ourArray[0])
let outroArray = new Array('a', 'b', 'c')
console.log(outroArray)
console.log(outroArray.length)
console.log(outroArray[2])

// Transformar uma String em um Array
let nextText = 'oi olá marcelo'
const nextArray = nextText.split(' ', 3)
// primeiro argumento é o separador ' ' e o segundo é delimitador
console.log(nextArray)
console.log(nextArray[0])
console.log(nextArray.length)

// usando o from
console.log(Array.from(nextText))
console.log('------')

// manipulando Arrays
let tech = ['html', 'css', 'js']
console.log(tech)

// unshift -> [array] <- push
// shift   <- [array] -> pop

tech.push('node')
console.log(tech)

tech.unshift('java')
console.log(tech)

tech.pop()
console.log(tech)

tech.shift()
console.log(tech)

console.log(tech[1])

let index = tech.indexOf('css')
console.log(index)

console.log(tech.slice(1, 2))
console.log(tech.splice(1, 1))

var frutas = ['Banana', 'Laranja', 'Limão', 'Uva', 'Manga', 'Tomate']
var citros = frutas.slice(1, 4)
// comece na laranja[1] e corte da manga[4] pra frente
console.log(citros)
var citros = frutas.splice(1, 3)
// comece na laranja[1] e vá até a manga[4]
console.log(citros)

console.log('---fim do código---')
