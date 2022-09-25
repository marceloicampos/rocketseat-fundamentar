// linguagem estruturada
let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()
console.log(area)

// linguagem orientada a objetos
class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get finalArea() {
        return this.#calculateArea()
    }

    #calculateArea() {
        return this.height * this.width
    }
}

// criando objeto
let polygon = new Polygon(50,60)
console.log(polygon.finalArea)
