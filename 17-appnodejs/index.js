// process.stdout.write('Está gostando do curso? \n\n\n')

const questions = [
    'Qual é o seu nome ?',
    'Qual a sua idade ?',
    'O que você aprendeu hoje ?',
    'O que deixo você feliz hoje ?',
    'Quantas pessoas você ajudou hoje ?'
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + ' > ')
}

ask()

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    // process.stdout.write(data.toString().trim() + '\n')
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
        `
    OI, ${answers[0]}
    parabéns pela sua idade de ${answers[1]} anos,
    o que você apreendeu hoje foi: ${answers[2]}
    e você ficou feliz por: ${answers[3]},
    e esse foi o número de pessoas que você ajudou: ${answers[4]}.
    `
    )
})

// on() escuta eventos
// toString converte tudo para strings
// trim remove todos espaços em branco
