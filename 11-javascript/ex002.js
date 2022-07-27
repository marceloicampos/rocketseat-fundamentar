console.log('---início do código---')
/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let objeto = {
    receitas: [100, 11, 22.5],
    despesas: [10, 1, 2, 120.5]
}

let sumR = 0
for (let i = 0; i < objeto.receitas.length; i++) {
    sumR += objeto.receitas[i]
}
console.log(sumR.toFixed(2))

let sumD = 0
for (let i = 0; i < objeto.despesas.length; i++) {
    sumD += objeto.despesas[i]
}
console.log(sumD.toFixed(2))

function saldo(receitas, despesas) {
    saldoFam = receitas - despesas
    if (receitas > despesas) {
        console.log('positivo')
        console.log(saldoFam.toFixed(2))
    } else if (despesas > receitas) {
        console.log('negativo')
        console.log(saldoFam.toFixed(2))
    } else {
        console.log('zerado')
        console.log(saldoFam.toFixed(2))
    }
}

saldo(sumR, sumD)

console.log('---fim do código---')
