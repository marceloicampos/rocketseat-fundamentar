// setTimeout faz a execução de uma função após milissegundos
// 2 argumentos: a função e o tempo

const timeOut = 3000

const finished = () => console.log('time done after 3 seconds');

setTimeout(finished, timeOut)

console.log('Go, Go, Go');
