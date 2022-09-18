console.log(process.argv);

console.log('Meu Nome é: '+'Marcelo');

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é: ${firstName} ${lastName}`);

// rode com node .\process.js Marcelo Campos

// console.log('Seu Nome:', process.argv[2] + ' ' + process.argv[3]);
