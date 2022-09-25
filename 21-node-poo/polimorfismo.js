// Na herança: objetos podem herdar ou estender as
// características do objeto PAI, podendo copiar
// atributos e métodos de outra classe

// Polimorfismo: quando um objeto estende de outro
// (ocorre herança) e talvez haja  a necessidade
// reescrever uma ou mais características
// (atributos ou métodos) no novo objeto.
// Assim recriamos um método ou mais de uma classe
// herdada, isso é polimorfismo.

class Atleta {
    peso
    constructor(peso) {
        this.peso = peso
    }
    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        } else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        } else {
            this.categoria = 'adulto'
        }
        return this.categoria
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }
    definirCategoria() {
        if (this.peso <= 55) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'leve'
        } else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } else {
            this.categoria = 'pesado'
        }
        return this.categoria
    }
}

const marcelo = new Atleta(50)
console.log(marcelo.peso + ' ' + marcelo.definirCategoria())

const caio = new Lutador(65)
console.log(caio.peso + ' ' + caio.definirCategoria())
