// um clearTimeout CANCELA um setTimeout

const timeOut = 3000

const finished = () => console.log('time done after 3 seconds');

let timer =  (setTimeout(finished, timeOut)) 

clearTimeout(timer) 

console.log('Go, Go, Go');
