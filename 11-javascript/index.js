var nome
// declaration
nome = 'marcelo'
// assignment
console.log(nome)
console.log(typeof nome)

let age = 43
// number
let isHUman = true
// boolean

let color, city
// agrupamento
color = 'red'
city = 'fortaleza'

console.log(nome, isHUman, color, city)
// entre ( ) estão os argumentos

console.log('marcelo tem 48 anos')
console.log(nome + ' tem ' + age + ' anos')
// concatenação
console.log(`${nome} tem ${age} anos de vida`)
// template string or template literal

const person = {
    name: 'john',
    age: 30,
    weight: 95.5,
    isAdmin: true
}
// object on javascript
console.log(person.name + person.age)
console.log(`${person.name}, ${person.age}`)

const animals = [
    'lion',
    'monkey',
    'cat',
    {
        pet: 'dog',
        owner: 'marcelo'
    }
]

// array on javascript
console.log(animals[0] + animals[1])

console.log(`${animals[0]}, ${animals[1]}, ${animals[3].pet}, ${animals[3].owner}`)

console.log(animals[0] + ', ' + animals[1] + ', ' + animals[3].pet + ', ' + animals[3].owner)

console.log(animals.length)

let weight
console.log(typeof weight)

let name1 = 'Eduarda'
let age1 = 11
let stars1 = 7.7
let isSubscribed1 = true

let estudante00 = {
    name2: 'Eduarda',
    age2: 11,
    stars2: 7.7,
    isSubscribed: true
}

let estudante01 = {
    name2: 'Caio',
    age2: 17,
    stars2: 4.3,
    isSubscribed: false
}

let alunos = []
alunos = [estudante00, estudante01]

console.log(estudante00)
console.log(estudante01)
console.log(alunos[0])
console.log(alunos[1])

console.log(typeof estudante00)
console.log(typeof estudante01)
console.log(typeof alunos)

console.log('antes ' + a)
var a = 1
console.log('meio ' + a)
a = 2
console.log('depois ' + a)

// console.log('antes ' + b)
// ocorre um erro acima, pois let não sofre hosting
let b = 33
console.log('meio ' + b)
b = 44
console.log('depois ' + b)

console.log('---------')
