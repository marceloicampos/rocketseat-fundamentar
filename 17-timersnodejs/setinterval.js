// setInterval irá rodar uma função N vezes
// depois de x milissegundos

const timeOut = 1000

let num = 0

let checking = () => console.log(num +=1)

setInterval(checking, timeOut)
