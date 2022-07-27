console.log('---início do código---')

// for

for (let x = 1; x < 100; x++) {
    if (x === 3) {
        continue
    }
    // acima "pulamos a execução" do 3
    if (x === 6) {
        break
    }
    console.log(x)
}

// while

let i = 0
while (i < 3) {
    console.log('Campos')
    i++
}
// NOTA: GERALMENTE USAMOS O WHILE quando não sabemos onde termina o loop
let y = 458575445
while (y > 10) {
    console.log('Campos35')
    y /= 35
}

// forEach

const myArray = ['abacaxi', 'mamão', 'limão']
myArray.forEach(element => {
    console.log(element + ' é uma fruta')
})

// for of

let nome = 'Marcelo'
let nextArray = ['carro', 'moto', 'bicicleta']
for (const iterator of nextArray) {
    console.log(iterator)
}

// for in

let object = { a: 1, b: 2, c: 3 }
for (var key in object) {
    console.log('object.' + key + ' = ' + object[key])
}

let person = {
    name: 'john',
    age: 30,
    weight: 88.5
}

for (let property in person) {
    if (Object.hasOwnProperty.call(person, property)) {
        const element = person[property];
        console.log(element);
    }
}

console.log('---fim do código---')
