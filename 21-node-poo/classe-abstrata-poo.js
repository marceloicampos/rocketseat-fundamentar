class Parafuso {
  constructor() { // Super Classe - Abstrata
    if (this.constructor === Parafuso)
    throw new Error ('Classe Abstrata não pode ser instanciada')
  }
  get tipo () {
    throw new Error ('Método "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
  constructor () {
    super()
  }
  get tipo () {
    return 'Fenda'
  }
}

class Philips extends Parafuso {
  constructor () {
    super()
  }
  get tipo () {
    return 'Philips'
  }
}

class Allen extends Parafuso {

}

// criar e usar

// new Parafuso() // Classe Abstrata não pode ser instanciada senão error
let fenda = new Fenda()
let philips = new Philips()
// let allen = new Allen() // Método "get tipo()" precisa ser implementado senão error

console.log(fenda.tipo + ' ' + philips.tipo);
// console.log(allen.tipo);
