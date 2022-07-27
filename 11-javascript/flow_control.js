console.log('---início do código---')

// if and else

let temperature = 35

if (temperature >= 36 && temperature < 36.5) {
    console.log('saudável')
} else if (temperature >= 37 && temperature < 38) {
    console.log('febre')
} else if (temperature >= 38) {
    console.log('febre alta')
} else if (temperature <= 35) {
    console.log('hipotermia')
} else {
    console.log('saudável')
}

// switch

// switch (expression) {
//     case 'a':
//         //código
//         break
//     case 'b':
//         //código
//         break
//     default:
//         break
// }

let key = 'a'

switch (key) {
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calc(n1, operator, n2) {
    switch (operator) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operação inválida'
    }
}

console.log(calc(10, '/', 5))

function calculate(m1, op, m2) {
    let result = ' '
    switch (op) {
        case '+':
            result = m1 + m2
            break
        case '-':
            result = m1 - m2
            break
        case '*':
            result = m1 * m2
            break
        case '/':
            result = m1 / m2
            break
        default:
            console.log('Operação inválida')
            break
    }
    return result
}

console.log(calculate(10, '/', 5))

// throw, dispare, lance

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('O Nome é Obrigatório')
        // throw 'Nome não informado'
    }
    console.log('Sem passar pelo erro, temos: ' + name)
}

//sayMyName('')
// colocando chamada da função com throw fora do try catch não pegamos o catch
// e o javascript para a execução na mesma hora, pois laçamos um problema, mas
// não tratamos o problema

// try catch, tente senão pegue

try {
    sayMyName('')
    // para não passar pelo erro podemos inserir um nome acima: 'marcelo'
} catch (error) {
    console.log(error)
}

// com o try nós tentamos a execução, caso retorne um problema o erro é
// capturado pelo catch e a execução do programa continua

console.log('Após o try catch')

console.log('---fim do código---')
