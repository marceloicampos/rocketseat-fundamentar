console.log('---início do código---')
/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres t  ipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   E
*/

// const sistema = nota => {
//   if (nota >= 90) {
//       console.log('A')
//   }
//   if (nota >= 80 && nota <= 89) {
//       console.log('B')
//   }
//   if (nota >= 70 && nota <= 79) {
//       console.log('C')
//   }
//   if (nota >= 60 && nota <= 69) {
//       console.log('D')
//   }
//   if (nota < 60) {
//       console.log('E')
//   }
// }

const sistema = nota => {
    if (nota >= 90 && nota <= 100) {
        // console.log('A')
        score = 'A'
    } else if (nota >= 80 && nota <= 89) {
        // console.log('B')
        score = 'B'
    } else if (nota >= 70 && nota <= 79) {
        // console.log('C')
        score = 'C'
    } else if (nota >= 60 && nota <= 69) {
        // console.log('D')
        score = 'D'
    } else if (nota >= 0 && nota < 60) {
        // console.log('E')
        score = 'E'
    } else {
        // console.log('Nota Inválida')
        score = 'Nota Invalida'
    }
    // console.log(score);
    return score
}

sistema(80)
console.log(score)
sistema(100)
console.log(score)

// window.alert(score)

// console.log(sistema(80));

// window.alert(sistema(80))

console.log('---fim do código---')
