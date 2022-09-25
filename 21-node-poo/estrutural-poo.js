// estruturado

var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// orientado a objeto

class custoEstimada {
  constructor(valorTime, timeEstimado) {
    this.valorTime = valorTime
    this.timeEstimado = timeEstimado
  }

  get calcDesconto () {
    return this.#descontoTime()
  }

  get calcCustoEstimado () {
    return (this.valorTime * this.timeEstimado) - this.calcDesconto
  }

  #descontoTime () {
    return this.valorTime * this.timeEstimado * (10 / 100) 
  }
}

// criando objeto

let custo = new custoEstimada (50, 20)

console.log(custo.calcCustoEstimado)

// poo

const job = new custoEstimada (50, 20)
job.valorTime = 50
job.timeEstimado = 20
job.calcDesconto = 10
const custoPrevisto = job.calcCustoEstimado
console.log(custoPrevisto);
