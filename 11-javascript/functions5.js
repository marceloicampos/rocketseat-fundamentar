console.log('---início do código---')

// call back function

function sayMyName(name) {
    console.log('antes')
    name()
    // estamos passando um função,
    // para dentro de outra função
    // e executando a função passada
    // console.log(name);
    console.log('depois')
}

sayMyName(() => {
    console.log('marcelo em call back')
})

class Person {
    constructor(name) {
        this.name = name
        this.walk = function () {
            return `${this.name} está andando`
        }
    }
}

// function Person(name) {
//   this.name = name
// }

const marcelo = new Person('marcelo2')
console.log(marcelo.walk())

const caio = new Person('caio2')
console.log(caio.walk())

let nome = new String('Eduarda')
console.log(nome);

let date = new Date()
console.log(date);

console.log('---fim do código---')
