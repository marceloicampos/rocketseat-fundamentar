const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chaves = new Character('Chaves')

chaves.on('help', ()=> console.log(`Lá vem o ${chaves.name} da vila.`))
chaves.emit('help')
console.log(`Isso, Isso, Isso...`)
