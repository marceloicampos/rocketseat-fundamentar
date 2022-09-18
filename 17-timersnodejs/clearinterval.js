// clearInterval serve para CANCELAR um setInterval registrado

const timeOut = 1000

let num = 0

let checking = () => console.log(num +=1)

let interval = setInterval(checking, timeOut)

// clearInterval(interval)

setTimeout(()=> clearInterval(interval), 4000)
