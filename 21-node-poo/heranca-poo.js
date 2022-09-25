class Veiculo {
    rodas = 4
    move(direction) {}
    turn(direction) {}
}

class Moto extends Veiculo {
    constructor() {
        super() // pegando atributos e métodos do pai
        this.rodas = 2
    }
}
