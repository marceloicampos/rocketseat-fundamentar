console.log('---início do código---')

// PENSE QUE a: Função é MIxer
function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copoDeSuco = fazerSuco('banana + ', 'maça')
console.log(copoDeSuco);

// function scope
let subject = 'create video'

function create() {
    // sem o parâmetro os 2 logs viram study
    subject = 'study'
    return subject
}

console.log(subject);
console.log(create());
console.log(create(subject));
console.log(subject);

console.log('---fim do código---')
