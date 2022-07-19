console.log('---início do código---')

// função anônima
const sum = function (n1, n2) {
    // n1 e n2 são PARÂMETROS DA FUNÇÃO CRIADA
    console.log(n1+n2);
    console.log('soma')
    let total = n1+n2
    // esse total NÃO É BOA PRÁTICA, pois ele espalha no escopo geral
    return total
    // o return para a execução da função e retorno que vem no return
}

// arrow function
const sum2 = (n3, n4) => {
    console.log(n3+n4);
    console.log('soma2')
}

let n11 = 11
let n22 = 22

console.log(`n11 é ${n11}`);
console.log(`n22 é ${n22}`);
console.log(`a soma n11+n22 é ${sum(n11, n22)}`);
// console.log(total);

sum(2, 3) // 2 e 3 SÃO ARGUMENTOS DA FUNÇÃO EXECUTADA
sum(10, 10)
sum2(3, 3)

console.log('---fim do código---')
